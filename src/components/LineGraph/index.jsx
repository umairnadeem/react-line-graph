import React, { Component } from 'react';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 100 100" preserveAspectRatio="none">
        <path stroke="#000000" fill="none" strokeWidth="1" d="M0,50 c 0,0 100,0 100,50"> </path>
      </svg>
    );
  }
}

export default LineGraph;
