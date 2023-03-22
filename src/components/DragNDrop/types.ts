import { PropsWithChildren } from "react"

export type TaskId = string
export type ColumnId = string

export interface Task {
    id: TaskId,
    content: string,
}

export interface Column {
    id: ColumnId,
    title: string,
    taskIds: Array<TaskId>
    
}

export interface Data {
    tasks: Record<TaskId, Task>
    columns: Record<ColumnId, Column>
    columnOrder: Array<ColumnId>
}

export interface DragNDropProps extends PropsWithChildren {
    data: Data
}

