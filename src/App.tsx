import './App.css'
import DragNDrop from './components/DragNDrop/DragNDrop'


const initialData = {
    items: {
        "item-1": {id: "item-1", content: "First item"},
        "item-2": {id: "item-2", content: "Second item"},
        "item-3": {id: "item-3", content: "Third item"},
        "item-4": {id: "item-4", content: "Fourth item"},
        "item-5": {id: "item-5", content: "Fifth item"},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            itemIds: ["item-1", "item-2", "item-3"]
        },
        "column-2": {
            id: "column-2",
            title: "To do",
            itemIds: ["item-4", "item-5"]
        },
    },
    columnOrder: ["column-1", "column2"]
}


export function App() {
    return (
        <div className="App">
            <DragNDrop data={initialData}/>
        </div>
    )
}
