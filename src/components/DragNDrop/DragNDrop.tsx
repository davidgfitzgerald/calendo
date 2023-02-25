import { DragNDropProps, dragStartParams as ItemCoords } from "./types";
import * as React from 'react';
import { useRef, useState } from 'react';


function DragNDrop({ data }: DragNDropProps) {
    const [items, setItems] = useState(data);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef<ItemCoords>();

    function onDragStart(event: React.DragEvent, params: ItemCoords) {
        console.log(`Drag started on (${params.groupIndex}, ${params.itemIndex})`)
        dragItem.current = params
        setDragging(true)
    }

    function setClassName(params: ItemCoords) {
        let className = "dnd-item"
        const current = dragItem.current
        const isDragItem = (): boolean => {
            return current !== undefined && current.groupIndex == params.groupIndex && current.itemIndex == params.itemIndex
        }

        if (dragging && isDragItem()) {
            className += " dragging"
        }

        return className
    }

    return (
        <div className="drag-n-drop">
            {items.map((group, groupIndex) => (
                <div key={group.title} className="dnd-group">
                    <div className="dnd-group-title">{group.title}</div>
                    {group.items.map((item, itemIndex) => (
                        <div
                            className={setClassName({ groupIndex, itemIndex })}
                            onDragStart={(event) => { onDragStart(event, { groupIndex, itemIndex }) }}
                            draggable
                            key={item}
                        >
                            <div>{item}</div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default DragNDrop;