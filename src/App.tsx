import React from 'react'
import './App.css'
import {DragNDrop} from './components/DragNDrop/DragNDrop'


const initialData = {
    tasks: {
        "task-1": {id: "task-1", content: "First task"},
        "task-2": {id: "task-2", content: "Second task"},
        "task-3": {id: "task-3", content: "Third task"},
        "task-4": {id: "task-4", content: "Fourth task"},
        "task-5": {id: "task-5", content: "Fifth task"},
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2", "task-3"]
        },
        "column-2": {
            id: "column-2",
            title: "Calendar",
            taskIds: ["task-4", "task-5"]
        },
    },
    columnOrder: ["column-1", "column-2"]
}


export class App extends React.Component {
    render() {
        return <DragNDrop data={initialData}/>
    }
}
