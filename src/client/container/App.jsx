import React from 'react';

export default class AppContainer extends React.Component {
  render() {
    return (
      <div id="container">
        {this.props.main}
      </div>
    );
  }
}
