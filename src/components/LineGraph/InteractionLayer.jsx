import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Point from './Point';
import { useMousePosition, findMidpoints } from '../_helpers';

const InteractionLayer = ({ width, height, data }) => {
  const midpoints = data
    .sort((a, b) => a[0] - b[0]) // TODO: remove when sorted at parent
    .map(findMidpoints);

  const [[x, y], setPosition] = useMousePosition();
  const [[pointX, pointY], setPoint] = useState([-100, -100]);
  useEffect(() => {
    const index = midpoints.findIndex((point) => x <= point);
    setPoint(data[index] || [-100, -100]);
  }, [x, y]);

  return (
    <g>
      <Point x={pointX} y={pointY} />
      <rect onMouseMove={setPosition} width={width} height={height} style={{ fill: 'transparent', stroke: 'red' }} />
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
