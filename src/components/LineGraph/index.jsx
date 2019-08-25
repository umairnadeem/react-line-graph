import React, { Component } from 'react';
import { drawPath } from '../_services';
import { smooth } from '../_transformations';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const points = [[0, 10], [10, 70], [20, 45], [30, 100], [40, 10], [60, 80]];
console.log(drawPath(points));
    const string = drawPath(points, smooth, 5);
    return (
      <svg
        style={{ width: '100%', height: '100%' }}
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <path stroke="#000000" fill="none" strokeWidth="1" d={string} />
        <g>
          <circle cx="0" cy="10" r="2" fill="red" />
          <circle cx="10" cy="70" r="2" fill="red" />
          <circle cx="20" cy="45" r="2" fill="red" />
          <circle cx="30" cy="100" r="2" fill="red" />
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
