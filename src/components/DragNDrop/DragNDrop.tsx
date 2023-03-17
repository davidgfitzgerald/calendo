import React from 'react';
import { DragNDropProps, Item, ItemId } from "./types";
import './DragNDrop.css';

function DragNDrop({ data }: DragNDropProps) {

  return (

    <div className="drag-n-drop">
      {
        data.columnOrder.map((columnId) => {
          const column = data.columns[columnId]
          const items = column.itemIds.map((itemId) => data.items[itemId])
          return (
            <div className="dnd-group" key={columnId}>
              <div className="dnd-group-title">{column.title}</div>
              {items.map((item) => {
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
