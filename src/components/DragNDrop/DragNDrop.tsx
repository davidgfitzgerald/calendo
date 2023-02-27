import { DragNDropProps, ItemCoords } from "./types";
import * as React from 'react';
import { useRef, useState } from 'react';
import './DragNDrop.css'


function DragNDrop({ data }: DragNDropProps) {
    const [items, setItems] = useState(data);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef<ItemCoords>();
    const dragNode = useRef<EventTarget>();

    const isDragItem = (item: ItemCoords): boolean => {
        return (
            dragItem.current?.groupIndex === item.groupIndex &&
            dragItem.current?.itemIndex === item.itemIndex
        )
    }

    function onDragStart(event: React.DragEvent, item: ItemCoords) {
        console.log(`Drag started on (${item.groupIndex}, ${item.itemIndex})`)
        dragItem.current = item
        dragNode.current = event.target
        dragNode.current.addEventListener("dragend", onDragEnd)
        requestAnimationFrame(() => {
            // Using requestAnimationFrame means the re-render is after  
            // the drag start.This means the drag ghost is 
            // the current item and not the blanked out item.
            setDragging(true)
        })
    }

    function onDragEnter(event: React.DragEvent, item: ItemCoords) {
        console.log(`Drag enter on (${item.groupIndex}, ${item.itemIndex})`)

        const currentItem = dragItem.current
        if (dragNode.current !== event.target) {
            setItems(oldItems => {
                if (currentItem === undefined) {
                    throw Error("Failed to set new items since dragItem is undefined")
                }
                let newItems = JSON.parse(JSON.stringify(oldItems))
                const removedItem = newItems[currentItem.groupIndex].items.splice(currentItem.itemIndex, 1)[0]
                newItems[item.groupIndex].items.splice(item.itemIndex, 0, removedItem)
                dragItem.current = item
                return newItems
            })
        }
    }

    function onDragEnd(event: Event): void {
        if (dragItem.current === undefined) {
            throw Error("Ending drag but dragItem is undefined")
        }
        if (dragNode.current === undefined) {
            throw Error("Ending drag but no dragNode is defined")
        }

        console.log("Ending drag.")
        dragNode.current.removeEventListener("dragend", onDragEnd)
        dragItem.current = undefined;
        dragNode.current = undefined;
        setDragging(false)
    }

    return (
        <div className="drag-n-drop">
            {items.map((group, groupIndex) => (
                <div
                    key={group.title}
                    className="dnd-group"
                    // onDragEnter={dragging && !group.items.length ? (event) => { onDragEnter(event, { groupIndex, itemIndex: 0 }) } : undefined}
                >
                    <div className="dnd-group-title">{group.title}</div>
                    {group.items.map((item, itemIndex) => (
                        <div
                            className={`dnd-item ${dragging && isDragItem({ groupIndex, itemIndex }) ? "dragging" : ""}`}
                            onDragStart={(event) => { onDragStart(event, { groupIndex, itemIndex }) }}
                            onDragEnter={dragging ? (event) => { onDragEnter(event, { groupIndex, itemIndex }) } : undefined}
                            draggable
                            key={item}
                        >
                            <div>{item}</div>
                        </div>
                    ))}
                    {dragging && !group.items.length ?
                        <div
                            className="dnd-space-below-group"
                            onDragEnter={dragging && !group.items.length ? (event) => { onDragEnter(event, { groupIndex, itemIndex: 0 }) } : undefined}

                        ></div>
                        : undefined
                    }
                </div>
            ))}
        </div>
    );
}

export default DragNDrop;