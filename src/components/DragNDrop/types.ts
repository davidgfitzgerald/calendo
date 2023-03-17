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
    itemIds: ItemId[]

}

export interface Data {
    items: Record<ItemId, Item>
    columns: Record<ColumnId, Column>
    columnOrder: ColumnId[]
}

export interface DNDProps extends PropsWithChildren {
    data: Data
}

export interface DNDGroupProps extends PropsWithChildren {
    column: Column,
    items: Item[],
}

export interface DNDItemProps extends PropsWithChildren {
    item: Item
}

