import React from 'react';
import { DragNDropProps, DragAndDropState } from "./types";
import './DragNDrop.css';
import Column from './Column';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';


export class DragNDrop extends React.Component<DragNDropProps, DragAndDropState> {
  constructor(props: DragNDropProps) {
    super(props)
    this.state = this.props.data
  }

  onDragEnd = (result: DropResult) => {
    const {source, destination, draggableId} = result
  
    if (!destination) {
      return  // destination may be null or undefined
    }

    if (
      source.droppableId === destination.droppableId && 
      source.index == destination.index
    ) {
      return  // item dropped back at start 
    }
    
    this.setState((prevState) => {
      let newState = JSON.parse(JSON.stringify(prevState))
      newState.columns[source.droppableId].taskIds.splice(source.index, 1)
      newState.columns[destination.droppableId].taskIds.splice(destination.index, 0, draggableId)
      return newState
    }
    )
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