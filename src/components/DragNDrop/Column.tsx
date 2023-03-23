import React, { PropsWithChildren } from 'react';
import { ColumnProps } from "./types";
import './DragNDrop.css';
// import { Droppable } from 'react-beautiful-dnd';
import { StrictModeDroppable as Droppable } from '../../utils/StrictModeDroppable';
import styled from 'styled-components';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;

interface TaskListProps extends PropsWithChildren {
  isDraggingOver: boolean
}

const TaskList = styled.div<TaskListProps>`
  padding: 8px;
  transition: background-color 0.3s ease;
  background-color: ${props => (props.isDraggingOver ? "lightgrey" : "white")}
`;



export default class Column extends React.Component<ColumnProps> {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}