import { DragNDropProps, dragStartParams as DragItem } from "./types";
import * as React from 'react';
import { useRef, useState } from 'react';


function DragNDrop({ data }: DragNDropProps) {
    const [items, setItems] = useState(data);
    const [dragging, setDragging] = useState(false);
    const dragItem = useRef<DragItem>();

    function onDragStart(event: React.DragEvent, params: DragItem) {
        console.log(`Drag started on (${params.groupIndex}, ${params.itemIndex})`)
        dragItem.current = params
        setDragging(true)
    }

    return (
        <div className="drag-n-drop">
            {items.map((group, groupIndex) => (
                <div key={group.title} className="dnd-group">
                    <div className="dnd-group-title">{group.title}</div>
                    {group.items.map((item, itemIndex) => (
                        <div
                            className="dnd-item"
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