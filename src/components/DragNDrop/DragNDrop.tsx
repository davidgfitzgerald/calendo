import React from 'react';
import { DNDGroupProps, DNDItemProps, DNDProps } from "./types";
import './DragNDrop.css';

export function DND({ data }: DNDProps): JSX.Element {

  return (
    <div className="drag-n-drop">
      {
        data.columnOrder.map((columnId) => {
          const column = data.columns[columnId]
          const items = column.itemIds.map((itemId) => data.items[itemId])
          return <DNDGroup column={column} items={items}></DNDGroup>
        })
      }
    </div>
  );
}

export function DNDGroup({ column, items }: DNDGroupProps): JSX.Element {

  return (
    <div className="dnd-group" key={column.id}>
      <div className="dnd-group-title">{column.title}</div>
      {items.map((item) => {
        return <DNDItem item={item}></DNDItem>;
      })}
    </div>
  );
}

function DNDItem({ item }: DNDItemProps): JSX.Element {

  return (
    <div className="dnd-item">{item.content}</div>
  );
}

