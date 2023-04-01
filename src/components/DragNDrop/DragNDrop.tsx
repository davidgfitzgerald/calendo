import React from "react";
import { DragNDropProps } from "./types";
import { DndContext } from "@dnd-kit/core";
import Column from "./Column";


export default function DragNDrop(props: DragNDropProps) {
  return (
    <DndContext>
      <div className="drag-and-drop">
        {props.data.columnOrder.map((columnId) => {
          const column = props.data.columns[columnId]
          const tasks = column.taskIds.map((taskId) => props.data.tasks[taskId])
          return (
            <Column
              column={column}
              tasks={tasks}
              key={columnId}
              droppableId={columnId}
            ></Column>
          )
        })
        }
      </div>
    </DndContext>
  )
}