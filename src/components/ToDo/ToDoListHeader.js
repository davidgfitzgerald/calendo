import React from 'react'
import NewToDoButton from './NewToDoButton';

class ToDoListHeader extends React.Component {
  render() {
    return (
      <div className="to-do-list-header">
        <div className="to-do-list-title">
          To Dos
        </div>
        <NewToDoButton/>
      </div>
    )
  }
}


export default ToDoListHeader;