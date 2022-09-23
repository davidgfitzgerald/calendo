import React from 'react';
import ToDoItem from './ToDoItem';
import ToDoListHeader from './ToDoListHeader';
import './ToDo.css'

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.toDoItems = [
      { "title": "First Thing To Do", "description": "I really wanna do this thing." },
      { "title": "Second Thing To Do", "description": "This would be really cool." },
      { "title": "Third Thing To Do", "description": "One day I will do this." },
    ]
  }

  render() {
    return (
      <div className="to-do-list">
        <ToDoListHeader/>
        <div>
          {
            this.toDoItems.map((item, index) => {
              return <ToDoItem title={item.title} key={index}/>
            })
          }
        </div>
      </div>
    )
  }
}


export default ToDoList;