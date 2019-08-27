import React, { Component } from 'react';
import LineGraph from './LineGraph';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      data: [],
    };
  }

  componentDidMount() {
    const data = [[0, 10], [10, 70], [20, 45], [30, 100], [40, 10], [60, 80]];
    // for (let i = 0; i < 100; i++) {
    //   data.push([i, 20])
    // }
    this.setState({ data });
  }

  handleHover([x, y]) {
    this.setState({ value: y });
  }

  render() {
    const { data, value } = this.state;
    const props = {
      data,
      smoothing: 0.5,
      hover: true,
      accent: 'rgb(73,88,209)',
      fillBelow: 'url(#grad1)',
      strokeWidth: 0.9,
      onHover: this.handleHover.bind(this),
    };

    return (
      <div id="test">
        Some text...
        <h1>{value}</h1>
        <svg>
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgb(132,144,235)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgb(206,196, 235)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <LineGraph {...props} />
      </div>
    );
  }
}

export default App;
