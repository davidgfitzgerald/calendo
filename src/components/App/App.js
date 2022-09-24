import React, { Component } from 'react'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <NavItem icon="😃"></NavItem>
          <NavItem icon="😃"></NavItem>
          <NavItem icon="😃"></NavItem>
        </Navbar>
        <h1 className='boxit'>Hello, World!</h1>
      </div>
    );
  }
}


class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <ul className="navbar-nav">
          {this.props.children}
        </ul>
      </nav>
    )
  }
}


class NavItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a href="#" className="icon-button">
          {this.props.icon}
        </a>
      </li>
    )
  }
}



export default App;
