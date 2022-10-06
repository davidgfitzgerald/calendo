import React, { Component, PropsWithChildren } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './scrollingColumns.css';

let calendarData = [
  {"time": "6:30am"},
  {"time": "7:00am"},
  {"time": "7:30am"},
  {"time": "8:00am"},
  {"time": "8:30am"},
  {"time": "9:00am"},
  {"time": "9:30am"},
  {"time": "10:0am"},
  {"time": "10:30am"},
  {"time": "11:00am"},
  {"time": "11:30am"},
  {"time": "12:00pm"},
  {"time": "12:30pm"},
  {"time": "1:00pm"},
  {"time": "1:30pm"},
  {"time": "2:00pm"},
  {"time": "2:30pm"},
]

let toDoData = [
  {"title": "Go for a swim."},
  {"title": "Attack a swan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship seitan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship dead swans."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
  {"title": "Worship satan."},
]

function App() {
  return (
    <div className="App">
      <ScrollColumnContainer>
        <ScrollColumn startingHeight={270}>
          {calendarData.map((item)=>{
            return <TimeSlot time={item.time} key={uuidv4()}/>
          })}
        </ScrollColumn>
        <ScrollColumn startingHeight={270}>
          {toDoData.map((item)=>{
            return <ToDo title={item.title} key={uuidv4()}/>
          })}
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

interface ToDoProps {
  title: string
}

class ToDo extends Component<ToDoProps> {
  render() {
    return (
      <li className='to-do'>
        {this.props.title}
      </li>
    )
  }
}

interface ScrollColumnContainerProps extends PropsWithChildren {}


class ScrollColumnContainer extends Component<ScrollColumnContainerProps> {
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
}

interface ScrollColumnState {
  throttle: boolean
  height: number
}

class ScrollColumn extends Component<ScrollColumnProps, ScrollColumnState> {
  constructor(props: ScrollColumnProps) {
    super(props)

    this.state = {
      throttle: false,
      height: this.props.startingHeight
    }
    
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(event: React.UIEvent<HTMLDivElement, UIEvent>) {
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
    return (
      <div className='scroll-column' onScroll={this.state.throttle ? undefined : this.handleScroll} style={{ height: this.state.height }}>
        {this.props.children}
      </div>
    )
  }
}

export default App;
