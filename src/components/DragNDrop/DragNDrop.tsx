import React from 'react';
import { DragNDropProps, DragAndDropState } from "./types";
import './DragNDrop.css';
import Column from './Column';
import { DragDropContext, DropResult, DragUpdate } from 'react-beautiful-dnd';


export class DragNDrop extends React.Component<DragNDropProps, DragAndDropState> {
  constructor(props: DragNDropProps) {
    super(props)
    this.state = this.props.data
  }

  onDragStart = () => {
    document.body.style.color = "orange";
    document.body.style.transition = "background-color 0.5s ease"
  }

  onDragUpdate = (update: DragUpdate) => {
    const { destination } = update
    const opacity = destination
      ? destination.index / Object.keys(this.state.tasks).length
      : 0;
      document.body.style.backgroundColor = `rgba(153, 141, 217, ${opacity})`
  }

  onDragEnd = (result: DropResult) => {
    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    const { source, destination, draggableId } = result

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
      let newState = JSON.parse(JSON.stringify(prevState))  // TODO, see if there is better way to copy/dereference object
      newState.columns[source.droppableId].taskIds.splice(source.index, 1)
      newState.columns[destination.droppableId].taskIds.splice(destination.index, 0, draggableId)
      return newState
    }
    )
  }

  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
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