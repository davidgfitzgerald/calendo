import './App.css'
import DragNDrop from './components/DragNDrop/DragNDrop'

const data = [
    { "title": "Group 1", "items": ["Item 1", "Item 2", "Item 3"] },
    { "title": "Group 2", "items": ["Item 4", "Item 5"] },
]


export function App() {
    return (
        <div className="App">
            <DragNDrop data={data}/>
        </div>
    )
}
