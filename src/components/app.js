import React, { Component } from 'react';
import Header from './Header'

export default class App extends Component {
  render() {
    const divStyle = {
      clear: 'left'
    }
    return (
      <div>
        <div>
          <Header />
        </div>
        <div style={divStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
