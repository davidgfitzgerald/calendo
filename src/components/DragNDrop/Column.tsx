import React from 'react';
import { ColumnProps } from "./types";
import './DragNDrop.css';
import { Droppable } from 'react-beautiful-dnd';
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
const TaskList = styled.div`
  padding: 8px;
`;



export default class Column extends React.Component<ColumnProps> {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <TaskList
              ref={provided.innerRef}  // innerRef had a type error
              {...provided.droppableProps}
            >
              {this.props.tasks.map(task => <Task key={task.id} task={task} />)}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    )
  }
}