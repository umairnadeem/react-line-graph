import React, { Component } from 'react';
import LineGraph from './LineGraph';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="test">
        Some padding...
        <LineGraph />
      </div>
    );
  }
}

export default App;
