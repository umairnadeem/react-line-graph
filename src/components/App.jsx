import React, { useState } from 'react';
import LineGraph from './LineGraph';
import POINTS from '../../spec/_constants';

const App = () => {
  const [hovered, onHover] = useState([0, 0]);
  const data = POINTS.extreme;
  const props = {
    data,
    smoothing: 1,
    hover: true,
    accent: 'rgb(73,88,209)',
    fillBelow: 'url(#grad1)',
    strokeWidth: 3,
    onHover,
    compression: 0.3,
  };

  return (
    <div id="test">
      <h1 id="logo">{Number(hovered[0]).toFixed(2)}</h1>
      <h1 id="logo">{Number(hovered[1]).toFixed(2)}</h1>
      <LineGraph {...props} />
    </div>
  );
};

export default App;
