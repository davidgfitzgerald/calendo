import React from 'react';
import { DragNDropProps } from "./types";
import './DragNDrop.css';

function DragNDrop({ data }: DragNDropProps) {
  const { items, columns, columnOrder } = data

  return (

    <div className="drag-n-drop">
      {
        columnOrder.map((columnId) => {
          const column = columns[columnId]
          return (
            <div className="dnd-group" key={columnId}>
              <div className="dnd-group-title">{column.title}</div>
              {column.itemIds.map((itemId) => {
                const item = items[itemId]
                return <div className="dnd-item">{item.content}</div>
              })}
            </div>
          )
        })
      }
    </div>
  );
}

export default DragNDrop;
