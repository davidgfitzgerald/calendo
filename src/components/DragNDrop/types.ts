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

export interface Data {
    tasks: Record<TaskId, Task>
    columns: Record<ColumnId, Column>
    columnOrder: ColumnId[]
}

export interface ColumnProps extends PropsWithChildren {
    column: Column
    tasks: Task[]
}

export interface TaskProps extends PropsWithChildren {
    task: Task
}

export interface DragNDropProps extends PropsWithChildren {
    data: Data
}

