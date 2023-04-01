import React from "react";
import { TaskProps } from "./types";
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';


export default function Task(props: TaskProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.draggableId,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div className="dnd-item" ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <h2>{props.task.id}</h2>
      {props.children}
    </div>
  );
}