import React, { Component } from 'react';

import Header from './Header';

// this.props.children is where the components are displayed

export default class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}