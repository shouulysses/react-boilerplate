import React, { Component } from 'react';

export default class AppContainer extends Component {

  render () {
    
  console.log(this.props)
    return (
      <div id="container">
        {this.props.main}
      </div>
    )
  }
};
