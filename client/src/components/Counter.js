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
  render() {

    return (
      <div>
        <button onClick={this.handleIncrement}>Button</button>
        <h3>Count = {this.state.count}</h3>
      </div>
    )
  }
}