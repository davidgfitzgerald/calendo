import { PropsWithChildren } from "react"

export type ItemId = string
export type ColumnId = string

export interface Item {
    id: ItemId,
    content: string,
}

export interface Column {
    id: ColumnId,
    title: string,
    itemIds: Array<ItemId>
    
}

export interface Data {
    items: Record<ItemId, Item>
    columns: Record<ColumnId, Column>
    columnOrder: Array<ColumnId>
}

export interface DragNDropProps extends PropsWithChildren {
    data: Data
}

