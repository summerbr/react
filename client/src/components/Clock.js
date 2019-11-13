import React, { Component } from 'react'

export default class Clock extends Component {
constructor(props) {
  super(props)
  this.state = {
    time: { date: new Date() }
  }
}
  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {time: {date: new Date()
        }
      }
      })
    }, 1000)
  }

  render() {
    
    return (
      <div>
        <h3>{this.state.time.date.toLocaleTimeString()}</h3>
      </div>
    )
  }
}