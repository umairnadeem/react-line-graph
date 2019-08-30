import React, { useState } from 'react';
import LineGraph from './LineGraph';
import points from '../../spec/_constants';

const App = () => {
  const [hovered, onHover] = useState([0, 0]);
  const data = points.pointsExtreme; // Get random set of points
  const props = {
    data,
    smoothing: 0.3,
    hover: true,
    accent: 'rgb(73,88,209)',
    fillBelow: 'url(#grad1)',
    strokeWidth: 3,
    onHover,
    compression: 0,
  };

  return (
    <div id="test">
      <h1 id="logo">{Number(hovered[1]).toFixed(2)}</h1>
      <LineGraph {...props} />
    </div>
  );
};

export default App;
