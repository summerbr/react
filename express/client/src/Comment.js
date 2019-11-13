import React, { Component } from 'react'

class Comment extends Component {
constructor(props) {
  super(props)
  this.state = {
    username: '',
    entry: '',
  }
}

handleChange = (e) => (
  this.setState({
    [e.target.name]: e.target.value
  }, 
))

handleSubmit = (e) => {
  e.preventDefault();
  let comments = [];
  comments.push({username: this.state.username, entry: this.state.entry})
  this.setState(
    {comments: comments}
  )
  console.log(this.state)
}

  render() {
    return (
      <>
      <div>
        <h4>Comments</h4>
        <input onChange={this.handleChange} name='username' placeholder='username'></input>
        <br />
        <input onChange={this.handleChange} name='entry' placeholder='comment'></input>
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
      <h4>{this.state.comments ? this.state.comments[0].entry : null}</h4>
      </>
    )
  }
}

export default Comment
