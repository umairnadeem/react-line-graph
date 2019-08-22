import React, { Component } from 'react';
import { findCtrlPoint } from '../_helpers';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const x = '0,100';
    const y = '45,50';
    const z = '90,100';
    const ctrlA = findCtrlPoint(x, y, z, 10, true).join(',');
    const ctrlB = findCtrlPoint(x, y, z, 10, false).join(',');
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
          d={`M${x} S${ctrlA} ${y} S${ctrlB} ${z}`}
        />
        <g>
          <circle cx="35" cy="50" r="2" fill="red" />
          <circle cx="55" cy="50" r="2" fill="red" />
        </g>
      </svg>
    );
  }
}

export default LineGraph;
