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
    // const data = [[0, 10], [10, 70], [20, 45], [30, 100], [40, 10], [60, 80]];
    // const data = [[0, 100], [100, 50]];
    const data = [];
    for (let i = 0; i < 100; i += 1) {
      data.push([i, Math.random() * 20]);
    }
    this.setState({ data });
  }

  handleHover(coordinates) {
    this.setState({ value: coordinates[1] });
  }

  render() {
    const { data, value } = this.state;
    const props = {
      data,
      smoothing: 0.4,
      hover: true,
      accent: 'rgb(73,88,209)',
      fillBelow: 'url(#grad1)',
      strokeWidth: 3,
      onHover: this.handleHover.bind(this),
      compression: 0.5,
    };

    return (
      <div id="test">
        Some text...
        <h1 id="logo">{Number(value).toFixed(2)}</h1>
        <svg width="0" height="0">
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
