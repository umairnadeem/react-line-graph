import React, { Component } from 'react';
import LineGraph from './LineGraph';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [[0, 10], [10, 70], [20, 45], [30, 100], [40, 10], [60, 80]];
    return (
      <div id="test">
        Some padding...
        <LineGraph data={data} />
      </div>
    );
  }
}

export default App;
