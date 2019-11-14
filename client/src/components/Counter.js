import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()
    this.state={
      count: 0
    }
  }
  handleIncrement = (e) => {
    // let currentCount = this.state.count
    // let newCount = currentCount + 1
    this.setState({
      count: this.state.count + 1
    })
  }
  handleDecrement = (e) => {
    this.setState({
      count: this.state.count - 1
    })
  }
  reset = (e) => {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <div>
        <button className ="button" onClick={this.handleIncrement}>Increment</button>
        <button className ="button"onClick={this.handleDecrement}>Decrement</button>
        <button className ="button" onClick={this.reset}>Reset</button>
        <h3>Current Count = {this.state.count}</h3>
      </div>
    )
  }
}