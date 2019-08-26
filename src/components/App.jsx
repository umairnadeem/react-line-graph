import React, { Component } from 'react';
import LineGraph from './LineGraph';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const data = [[0, 10], [10, 70], [20, 45], [30, 100], [40, 10], [60, 80]];
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push([i, 20 + Math.random() * 20])
    }
    const props = {
      data,
      smoothing: 0.5,
    };

    return (
      <div id="test">
        Some padding...
        <LineGraph {...props} />
      </div>
    );
  }
}

export default App;
