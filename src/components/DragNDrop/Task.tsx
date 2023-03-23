import React, { PropsWithChildren } from "react";
import { TaskProps } from "./types";
import styled from 'styled-components';
import { Draggable } from "react-beautiful-dnd";

interface ContainerProps extends PropsWithChildren {
    isDragging: boolean
}

const Container = styled.div<ContainerProps>`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? "lightgreen": "white")};
`;

export default class Task extends React.Component<TaskProps, {}> {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}  // can make small part drag entirety
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        {this.props.task.content}
                    </Container>
                )}
            </Draggable>
        );
    }
}