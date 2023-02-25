import './App.css'


const data = [
    { "title": "Group 1", "items": ["Item 1", "Item 2", "Item 3"] },
    { "title": "Group 2", "items": ["Item 4", "Item 5"] },
]


export function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="drag-n-drop">
                    {data.map((group, groupIndex) => (
                        <div key={group.title} className="dnd-group">
                            <div className="dnd-group-title">{group.title}</div>
                            {group.items.map((item, itemIndex) => (
                                <div draggable key={item} className="dnd-item">
                                    <div>{item}</div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </header>
        </div>
    )
}
