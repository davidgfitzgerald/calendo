import React, { Component } from 'react'
import { ReactComponent as ArrowIcon } from '../../svg/fireship/arrow.svg'
import { ReactComponent as BellIcon } from '../../svg/fireship/bell.svg'
import { ReactComponent as BoltIcon } from '../../svg/fireship/bolt.svg'
import { ReactComponent as CaretIcon } from '../../svg/fireship/caret.svg'
import { ReactComponent as ChevronIcon } from '../../svg/fireship/chevron.svg'
import { ReactComponent as CogIcon } from '../../svg/fireship/cog.svg'
import { ReactComponent as MessengerIcon } from '../../svg/fireship/messenger.svg'
import { ReactComponent as PlusIcon } from '../../svg/fireship/plus.svg'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          {/* <NavItem icon={<ArrowIcon />} /> */}
          <NavItem icon={<PlusIcon />} />
          <NavItem icon={<BellIcon />} />
          {/* <NavItem icon={<BoltIcon />} /> */}
          {/* <NavItem icon={<ChevronIcon />}/> */}
          {/* <NavItem icon={<CogIcon />} /> */}
          <NavItem icon={<MessengerIcon />} />
          <NavItem icon={<CaretIcon />}>
            <DropdownMenu>
              <DropDownItem>My Profile</DropDownItem>
              <DropDownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>Hey</DropDownItem>
              <DropDownItem>Another thing</DropDownItem>
            </DropdownMenu>
          </NavItem>
        </Navbar>
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
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ open: !this.state.open })
    console.log(`Open is now ${this.state.open}`)
  }


  render() {
    return (
      <li className="nav-item">
        <a href="#" className="icon-button" onClick={this.toggle}>
          {this.props.icon}
        </a>

        {this.state.open && this.props.children}
      </li>
    )
  }
}


class DropdownMenu extends Component {
  render() {
    return (
      <div className='dropdown'>{this.props.children}</div>
    )
  }
}


class DropDownItem extends Component {
  render() {
    return (
      <a href="#" className="menu-item">

        <span className={this.props.leftIcon && "icon-button"}>{this.props.leftIcon}</span>
        {this.props.children}
        <span className={this.props.leftIcon && "icon-right icon-button"}>{this.props.rightIcon}</span>
      </a>
    )
  }
}





export default App;
