import React, { Component } from 'react';
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header style="clear:all"/>
        {this.props.children}
      </div>
    );
  }
}
