import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
// states or props must use class Component
// stateless : dumb components are functions

export default class Header extends Component {
  render() {
    // functional logic Header
    // XML (JSX) goes into return
    return (
      <div className="link">
        <NavLink to='/'>Counter</NavLink>
        <br />
        <NavLink to='/Clock'>Clock</NavLink>
        <br />
        <NavLink to='/Timer'>Timer</NavLink>
        <br />
        <NavLink to='/Alarm'>Alarm</NavLink>
      </div>
    )
  }
}