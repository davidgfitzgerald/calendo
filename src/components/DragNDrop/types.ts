import { PropsWithChildren } from "react"


export interface GroupType {
    title: string,
    items: Array<ItemType>
}

export type ItemType = string

export interface DragNDropProps extends PropsWithChildren {
    data: Array<GroupType>
}


export interface dragStartParams {
    groupIndex: number; 
    itemIndex: number; 
}