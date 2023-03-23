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
    taskIds: TaskId[]
}

export interface ColumnProps extends PropsWithChildren {
    column: Column
    tasks: Task[]
}

export interface TaskProps extends PropsWithChildren {
    task: Task
    index: number
}

export interface DragNDropProps extends PropsWithChildren {
    data: DragAndDropState
}

export interface DragAndDropState {
    tasks: Record<TaskId, Task>
    columns: Record<ColumnId, Column>
    columnOrder: ColumnId[]
}

