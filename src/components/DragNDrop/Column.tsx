import React from 'react';
import { ColumnProps } from "./types";
import './DragNDrop.css';
import Task from './Task';
import { useDroppable } from '@dnd-kit/core';


export default function Column(props: ColumnProps) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.droppableId,
  });
  const style = {
    opacity: isOver ? '70%' : undefined,
  };
  
  return (
    <div ref={setNodeRef} style={style} className="dnd-group">
      <h2 className='dnd-group-title'>{props.column.title}</h2>
      {props.tasks.map((task) => <Task key={task.id} task={task} draggableId={task.id} />)}
    </div>
  );
}