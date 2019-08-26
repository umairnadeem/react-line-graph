import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Point from './Point';
import Line from './Line';
import { useMousePosition, findMidpoints } from '../_helpers';

const InteractionLayer = ({ width, height, data }) => {
  const [[x, y], setPosition] = useMousePosition();
  const [[pointX, pointY], setPoint] = useState([-100, -100]);
  const clearPoint = () => setPoint([-100, -100]);
  const midpoints = data
    .sort((a, b) => a[0] - b[0]) // TODO: remove when sorted at parent
    .map(findMidpoints);

  useEffect(() => {
    const index = midpoints.findIndex((point) => x <= point);
    setPoint(data[index] || [-100, -100]);
  }, [x, y]);

  return (
    <g>
      <Point x={pointX} y={pointY} />
      <Line x={pointX} />
      <rect onMouseLeave={clearPoint} onMouseMove={setPosition} width={width} height={height} style={{ fill: 'transparent', stroke: 'red' }} />
    </g>
  );
};

InteractionLayer.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
};

InteractionLayer.defaultProps = {
  data: [],
};

export default InteractionLayer;
