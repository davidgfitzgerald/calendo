import { useState } from "react";

/**
 * Mutate `arr` by moving the item at `startIndex` to `endIndex`.
 * 
 * @param startIndex - The index of the item to move
 * @param endIndex - The index to drop the item
 * @param arr - The array to mutate
 */
function moveItem(startIndex: number, endIndex: number, arr: Array<any>) {
    const originalElement = arr.splice(startIndex, 1)[0];
    arr.splice(endIndex, 0, originalElement);
}


interface ItemListProps {
    items: Array<String>
}


export function App(props: ItemListProps) {
    const style = {
        padding: 50,
        fontSize: 100
    }
    return (
        <div className="app">
            <div style={style}>Hello, World!</div>
            <ItemList items={props.items} />
        </div>
    )
}


export function ItemList(props: ItemListProps) {
    const style = {
        listStyle: "none"
    }

    const [items, setItems] = useState(props.items)

    function onDragStart(event: React.DragEvent<HTMLLIElement>, index: number) {
        event.dataTransfer.setData("startIndex", index.toString())
    }

    function onDragOver(event: React.DragEvent<HTMLLIElement>, index: number) {
        event.preventDefault();
    }

    function onDrop(event: React.DragEvent<HTMLLIElement>, endIndex: number) {
        const startIndex = parseInt(event.dataTransfer.getData("startIndex"))

        // Update the state with the dropped element
        moveItem(startIndex, endIndex, items);
        setItems(items)
    }

    // this.handleScroll = this.handleScroll.bind(this)
    // this.onDragStart = this.onDragStart.bind(this)
    // this.onDragOver = this.onDragOver.bind(this)
    // this.onDrop = this.onDrop.bind(this)
    return (
        <ul style={style}>
            {props.items.map((item) => <Item item={item} />)}
        </ul>
    );
}


interface ItemProps {
    item: String
}

export function Item(props: ItemProps) {
    const liStyle = {
        paddingTop: 5,
        margin: 5,
        fontSize: 30,
        background: "#999999",
        maxWidth: 500,
    }
    const divStyle = {
        padding: 10
    }
    return (
        <li style={liStyle}>
            <div style={divStyle}>
                {props.item}
            </div>
        </li>
    )
}