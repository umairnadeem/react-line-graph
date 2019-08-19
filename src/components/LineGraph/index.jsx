import React, { Component } from 'react';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return (
      // <div style={{ width: "400px", height: "400px"}}>
      //   <svg preserveAspectRatio="none">
      //     <path stroke="black" stroke-width="2" d="M4 16.79 L 4 16.79 L 100 16.19" fill="none">
      //     </path>
      //   </svg>
      // </div>
    // <div style={{width: "400px", height:"300px", border: "1px solid black" }}>
      <svg style={{width:"200px", height: "300px" }} viewBox="0 0 340.156 340.152" preserveAspectRatio="none">
        <path stroke="#000000" fill="none" strokeWidth="5" d="M100,100 c 0,93.926 -76.146,170.074 200,100"> </path>
      </svg>
    // </div>
    );
  }
}

export default LineGraph;

