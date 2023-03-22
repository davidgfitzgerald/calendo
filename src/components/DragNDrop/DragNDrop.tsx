import React from 'react';
import { DragNDropProps } from "./types";
import './DragNDrop.css';
import Column from './Column';


export class DragNDrop extends React.Component<DragNDropProps, {}> {
  state = this.props.data;

  render() {
      return this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];
          const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])

          return (
            <Column key={columnId} column={column} tasks={tasks}></Column>
            )
      })
  }
}