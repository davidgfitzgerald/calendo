import React, { Component } from 'react'
import { ReactComponent as ArrowIcon } from '../../svg/fireship/arrow.svg'
import { ReactComponent as BellIcon } from '../../svg/fireship/bell.svg'
import { ReactComponent as BoltIcon } from '../../svg/fireship/bolt.svg'
import { ReactComponent as CaretIcon } from '../../svg/fireship/caret.svg'
import { ReactComponent as ChevronIcon } from '../../svg/fireship/chevron.svg'
import { ReactComponent as CogIcon } from '../../svg/fireship/cog.svg'
import { ReactComponent as MessengerIcon } from '../../svg/fireship/messenger.svg'
import { ReactComponent as PlusIcon } from '../../svg/fireship/plus.svg'

import { CSSTransition } from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeMenu: "main",
      menuHeight: null,
    }

    this.goToMenu = this.goToMenu.bind(this)
    this.setMenuHeight = this.setMenuHeight.bind(this)
  }

  goToMenu(menu) {
    this.setState({ activeMenu: menu })
  }

  setMenuHeight(el) {
    const height = el.offsetHeight;
    this.setState({ menuHeight: height })
    console.log(`menu height is now ${this.state.menuHeight}`)
  }

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
            <DropdownMenu height={this.state.menuHeight}>
              <CSSTransition
                in={this.state.activeMenu === "main"}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={this.setMenuHeight}>
                <div className="menu">
                  <DropDownItem>My Profile</DropDownItem>
                  <DropDownItem
                    leftIcon={<CogIcon />}
                    rightIcon={<ChevronIcon />}
                    targetMenu="settings"
                    goToMenu={this.goToMenu}>
                    Settings
                  </DropDownItem>
                </div>
              </CSSTransition>
              <CSSTransition 
              in={this.state.activeMenu === "settings"} 
              unmountOnExit 
              timeout={500} 
              classNames="menu-secondary"
              onEnter={this.setMenuHeight}>
                <div className="menu">
                  <DropDownItem
                    targetMenu="main"
                    leftIcon={<ArrowIcon />}
                    goToMenu={this.goToMenu}>
                    Go Back
                  </DropDownItem>
                  <DropDownItem>A Thing You Can't Do</DropDownItem>
                  <DropDownItem>A Button That Doesn't Work</DropDownItem>
                  <DropDownItem>Clicking This Does Nothing</DropDownItem>
                </div>
              </CSSTransition>
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
      <div className='dropdown' style={{height: this.props.height}}>{this.props.children}</div>
    )
  }
}


class DropDownItem extends Component {
  constructor(props) {
    super(props)
    this.targetMenu = this.props.targetMenu
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.targetMenu && this.props.goToMenu(this.props.targetMenu)
  }

  render() {
    return (
      <a href="#" className="menu-item" onClick={this.handleClick}>

        <span className={this.props.leftIcon && "icon-button"}>{this.props.leftIcon}</span>
        {this.props.children}
        <span className={this.props.rightIcon && "icon-button"}>{this.props.rightIcon}</span>
      </a>
    )
  }
}





export default App;
