import React, { PropsWithChildren } from 'react';
import { DNDGroupProps, DNDItemProps, DNDProps } from "./types";
import './DragNDrop.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const Container = styled.div``

export function DND({ data }: DNDProps): JSX.Element {

  function onDragEnd() {
    // TODO re-order column
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="drag-n-drop">
        {
          data.columnOrder.map((columnId) => {
            const column = data.columns[columnId]
            const items = column.itemIds.map((itemId) => data.items[itemId])
            return (
              <DNDGroup column={column} items={items} key={column.id}></DNDGroup>
            )
          })
        }
      </div>
    </DragDropContext>
  );
}

export function DNDGroup({ column, items }: DNDGroupProps): JSX.Element {

  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <Container
          innerRef={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="dnd-group-title">{column.title}</div>
          {items.map((item) => {
            return <DNDItem item={item} key={item.id}></DNDItem>;
          })}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

function DNDItem({ item }: DNDItemProps): JSX.Element {

  return (
    <div className="dnd-item">{item.content}</div>
  );
}

