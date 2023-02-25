import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

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
        console.log(`Called onDragStart on item ${index}`)
        event.dataTransfer.setData("startIndex", index.toString())
    }
    
    function onDragOver(event: React.DragEvent<HTMLLIElement>, index: number) {
        console.log(`Called onDragOver on item ${index}`)
        event.preventDefault();
    }
    
    function onDrop(event: React.DragEvent<HTMLLIElement>, endIndex: number) {
        console.log(`Called onDrop on item ${endIndex}`)
        const startIndex = parseInt(event.dataTransfer.getData("startIndex"))
        event.preventDefault();

        // Update the state with the dropped element
        console.log(`move item from ${startIndex} to ${endIndex}`)
        console.log(`items was ${items}`)
        moveItem(startIndex, endIndex, items);
        setItems(items)
        console.log(`items is now ${items}`)


    }

    // this.handleScroll = this.handleScroll.bind(this)
    // this.onDragStart = this.onDragStart.bind(this)
    // this.onDragOver = this.onDragOver.bind(this)
    // this.onDrop = this.onDrop.bind(this)

    return (
        <ul style={style}>
            {props.items.map((name, index) => {
                return <Item
                name={name} 
                key={uuidv4()}
                index={index}
                onDragStart={(event) => onDragStart.bind(null, event, index)}
                onDragOver={(event) => onDragOver.bind(null, event, index)}
                onDrop={(event) => onDrop.bind(null, event, index)}
                />
            })}
        </ul>
    );
}


interface ItemProps {
    name: String
    key: String
    index: Number
    onDragStart: React.DragEventHandler<HTMLLIElement>
    onDragOver: React.DragEventHandler<HTMLLIElement>
    onDrop: React.DragEventHandler<HTMLLIElement>
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
        <li style={liStyle} draggable={true}
        onDragStart={props.onDragStart}
        onDragOver={props.onDragOver}
        onDropCapture={props.onDrop}
        >
            <div style={divStyle}>
                {props.name}
            </div>
        </li>
    )
}