interface ItemsProps {
    items: Array<String>
}


export function App(props: ItemsProps) {
    const style = {
        padding: 50,
        fontSize: 100
    }
    return (
        <div className="app">
            <div style={style}>Hello, World!</div>
            <Items items={props.items} />
        </div>
    )
}


export function Items(props: ItemsProps) {
    const style = {
        listStyle: "none"
    }
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