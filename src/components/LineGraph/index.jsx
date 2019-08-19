import React, { Component } from 'react';
import { toBezier } from '../_helpers';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(toBezier('0,50', '90,10', 5));
    return (
      <svg
        style={{ width: '100%', height: '100%' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          stroke="#000000"
          fill="none"
          strokeWidth="1"
          d={`M0,50 ${toBezier('0,50', '90,10', 5)}`}
        />
        <g>
          <circle cx="40" cy="18.75" r="2" fill="red" />
        </g>
      </svg>
    );
  }
}

export default LineGraph;
