import { DragNDropProps, dragStartParams as ItemCoords } from "./types";
import * as React from 'react';
import { useRef, useState } from 'react';


function DragNDrop({ data }: DragNDropProps) {
    const [items, setItems] = useState(data);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef<ItemCoords>();
    const dragNode = useRef<EventTarget>();

    const isDragItem = (params: ItemCoords): boolean => {
        return dragItem.current !== undefined && dragItem.current.groupIndex == params.groupIndex && dragItem.current.itemIndex == params.itemIndex
    }

    function onDragStart(event: React.DragEvent, item: ItemCoords) {
        console.log(`Drag started on (${item.groupIndex}, ${item.itemIndex})`)
        dragItem.current = item
        dragNode.current = event.target
        dragNode.current.addEventListener("dragend", onDragEnd)
        setTimeout(() => {
            // Using setTimeout means the re-render is after  
            // the drag start.This means the drag ghost is 
            // the current item and not the blanked out item.
            setDragging(true)
        }, 0)
    }

    function onDragEnd(event: Event): void {
        if (dragItem.current === undefined) {
            throw Error("Ending drag but dragItem is undefined")
        }
        if (dragNode.current === undefined) {
            throw Error("Ending drag but no dragNode is defined")
        }
        
        console.log("Ending drag")
        dragNode.current.removeEventListener("dragend", onDragEnd)
        dragItem.current = undefined;
        dragNode.current = undefined;
        setDragging(false)
    }

    function setClassName(item: ItemCoords) {
        let className = "dnd-item"


        if (dragging && isDragItem(item)) {
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