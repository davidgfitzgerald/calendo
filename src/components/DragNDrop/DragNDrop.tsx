import React from 'react';
import { DragNDropProps } from "./types";
import './DragNDrop.css';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';


export class DragNDrop extends React.Component<DragNDropProps, {}> {
  state = this.props.data;

  onDragEnd = result => {
    // TODO re-order our column
  }

  render() {
    return (
      <DragDropContext
        onDragEnd={this.onDragEnd}
      
      >
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
          return (
            <Column key={columnId} column={column} tasks={tasks}></Column>
          )
        })}
      </DragDropContext>
    )
  }
}