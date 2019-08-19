import React, { Component } from 'react';
import { toBezier } from '../_helpers';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(toBezier('45,50', '90,100', 0));
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
          d={`M0,100 ${toBezier('0,100', '45,50', 16)} ${toBezier('45,50', '90,100', -16)}`}
        />
        <g>
          <circle cx="22.5" cy="25" r="2" fill="red" />
        </g>
      </svg>
    );
  }
}

export default LineGraph;
