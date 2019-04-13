import React, { Component } from 'react';

class Dev extends Component {
  onClickCheck = () => {
    console.log('onClickCheck')
  }
  render() {
    return (
      <div>
        <button onClick={this.onClickCheck}></button>
      </div>
    );
  }
}

export default Dev;
