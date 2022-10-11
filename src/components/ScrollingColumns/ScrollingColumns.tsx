import React, { Component, DetailedHTMLProps, DragEventHandler, LiHTMLAttributes, PropsWithChildren, DragEvent, EventHandler } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './scrollingColumns.css';

let calendarData = [
  { "time": "6:30am" },
  { "time": "7:00am" },
  { "time": "7:30am" },
  { "time": "8:00am" },
  { "time": "8:30am" },
  { "time": "9:00am" },
  { "time": "9:30am" },
  { "time": "10:0am" },
  { "time": "10:30am" },
  { "time": "11:00am" },
  { "time": "11:30am" },
  { "time": "12:00pm" },
  { "time": "12:30pm" },
  { "time": "1:00pm" },
  { "time": "1:30pm" },
  { "time": "2:00pm" },
  { "time": "2:30pm" },
]

let toDoData = [
  { "title": "Go for a swim." },
  { "title": "Attack a swan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship seitan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship dead swans." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
  { "title": "Worship satan." },
]

/**
 * Mutate `arr` by moving the item at `startIndex` to `endIndex`.
 * 
 * @param startIndex - The index of the item to drag
 * @param endIndex - The index to drop the item
 * @param arr - The array to mutate
 */
function moveItem(startIndex: number, endIndex: number, arr: Array<any>) {
  const draggedElement = arr.splice(startIndex, 1)[0];
  arr.splice(endIndex, 0, draggedElement);
}

function App() {

  return (
    <div className="App">
      <ScrollColumnContainer>
        {/* <ScrollColumn
          startingHeight={270}
          data={calendarData}>

        </ScrollColumn> */}
        <ScrollColumn
          startingHeight={270}
          todos={toDoData}>
        </ScrollColumn>
      </ScrollColumnContainer>
    </div>
  );
}

interface TimeSlotProps {
  time: string
}

class TimeSlot extends Component<TimeSlotProps> {
  render() {
    return (
      <li className='time-slot'>
        {this.props.time}
      </li>
    )
  }
}

interface ToDoObject {
  title: string
}

interface ToDoProps {
  title: string
  index: number
  onDragStart: DragEventHandler<HTMLLIElement>
  onDragOver: DragEventHandler<HTMLLIElement>
  onDrop: DragEventHandler<HTMLLIElement>
}

interface ToDoState {
  startedDragging: boolean;
}

export class ToDo extends Component<ToDoProps, ToDoState> {
  render() {
    return (
      <li
        className='to-do' draggable={true}
        onDragStart={this.props.onDragStart}
        onDragOver={this.props.onDragOver}
        onDropCapture={this.props.onDrop}
      >
        {this.props.title}
      </li>
    )
  }
}

interface ScrollColumnContainerProps extends PropsWithChildren { }


export class ScrollColumnContainer extends Component<ScrollColumnContainerProps> {
  render() {
    return (
      <div className='scroll-column-container'>
        {this.props.children}
      </div>
    )
  }
}

interface ScrollColumnProps extends PropsWithChildren {
  startingHeight: number
  todos: Array<ToDoObject>
}

interface ScrollColumnState {
  throttle: boolean
  height: number
  todos: Array<ToDoObject>
}

export class ScrollColumn extends Component<ScrollColumnProps, ScrollColumnState> {
  constructor(props: ScrollColumnProps) {
    super(props)

    this.state = {
      throttle: false,
      height: this.props.startingHeight,
      todos: this.props.todos
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }

  onDragStart(event: DragEvent<HTMLLIElement>, index: number) {
    event.dataTransfer.setData("startIndex", index.toString())
  }

  onDragOver(event: DragEvent<HTMLLIElement>, index: number) {
    event.preventDefault();
  }
  
  onDrop(event: DragEvent<HTMLLIElement>, endIndex: number) {
    const startIndex = parseInt(event.dataTransfer.getData("startIndex"))
    
    // Update the state with the dropped element
    moveItem(startIndex, endIndex, this.state.todos);

    this.setState({
      todos: this.state.todos
    })
  }


  handleScroll(event: React.UIEvent<HTMLUListElement, UIEvent>) {
    if (!this.state.throttle) {
      this.setState({
        throttle: true,
        height: event.currentTarget.scrollTop + (event.currentTarget.scrollHeight - event.currentTarget.clientHeight)
      });
      setTimeout(() => {
        this.setState({ throttle: false })
      }, 30)
    }
  }

  render() {
    const elements = this.state.todos.map((item, index) => {
      return <ToDo
        title={item.title}
        key={uuidv4()}
        index={index}
        onDragStart={(event) => this.onDragStart(event, index)}
        onDragOver={(event) => this.onDragOver(event, index)}
        onDrop={(event) => this.onDrop(event, index)}
      />
    })

    return (
      <ul className='scroll-column' onScroll={this.state.throttle ? undefined : this.handleScroll} style={{ height: this.state.height }}>
        {elements}
      </ul>
    )
  }
}

export default App;
