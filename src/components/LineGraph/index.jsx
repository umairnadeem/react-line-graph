import React, { Component } from 'react';
import { findCtrlPoint } from '../_helpers';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const x = '0,50';
    const y = '20,70';
    const z = '40,10';
    const a = '60,80';
    // const ctrlA = findCtrlPoint(x, y, z, 10, true).join(',');
    // const ctrlB = findCtrlPoint(y, z, a, 10, true).join(',');
    // const ctrlC = findCtrlPoint(y, z, a, 10, false).join(',');

    const ctrlA = findCtrlPoint(10, false, x, y, z).join(',');
    const ctrlB = findCtrlPoint(10, false, y, z, a).join(',');
    const ctrlC = findCtrlPoint(10, true, y, z, a).join(',');
    console.log(ctrlA, ctrlB, ctrlC);
    return (
      <svg
        style={{ width: '100%', height: '100%' }}
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path
          stroke="#000000"
          fill="none"
          strokeWidth="1"
          d={`M${x} S${ctrlA} ${y} S${ctrlB} ${z} S${ctrlC} ${a}`}
        />
        <g>
          <circle cx="0" cy="50" r="2" fill="red" />
          <circle cx="20" cy="70" r="2" fill="red" />
          <circle cx="40" cy="10" r="2" fill="red" />
          <circle cx="60" cy="80" r="2" fill="red" />

          <circle cx="10" cy="80" r="2" fill="blue" />
          <circle cx="30" cy="7.5" r="2" fill="blue" />
          <circle cx="50" cy="12.5" r="2" fill="blue" />
        </g>
      </svg>
    );
  }
}

export default LineGraph;
