import React, { Component } from 'react';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return (
      <svg style={{width:"450px", height: "300px" }} viewBox="0 0 340.156 340.152" preserveAspectRatio="none">
        <path stroke="#000000" fill="none" strokeWidth="5" d="M100,100 c 0,93.926 -76.146,170.074 200,100"> </path>
      </svg>
    );
  }
}

export default LineGraph;

