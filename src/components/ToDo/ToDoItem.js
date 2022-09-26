import React from 'react';
import './ToDo.css'

class ToDoItem extends React.Component {
  render() {
    return (
      <div className='to-do-item'>
        {this.props.title}
      </div>
    )
  }
}


export default ToDoItem;