import React, { Component } from 'react'

export class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: 0
    }
  }
  setTime = (e) => {
    
  }

  render() {
    return (
      <div>
        <form>
          <input type="time" onChange={this.setTime}>Set</input>
        </form>
      </div>
    )
  }
}

export default Timer
