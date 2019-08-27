import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Point from './Point';
import Line from './Line';
import { useMousePosition, findMidpoints } from '../_helpers';

const InteractionLayer = ({
  width, height, data, accent, strokeWidth, onHover,
}) => {
  const [[x, y], setPosition] = useMousePosition();
  const [[pointX, pointY], setPoint] = useState([-100, -100]);
  const clearPoint = () => setPoint([-100, -100]);
  const midpoints = data
    .sort((a, b) => a[0] - b[0]) // TODO: remove when sorted at parent
    .map(findMidpoints);

  useEffect(() => {
    const index = midpoints.findIndex((point) => x <= point);
    setPoint(data[index] || [-100, -100]);
    onHover(data[index] || []);
  }, [x, y]);

  return (
    <g>
      <Point x={pointX} y={pointY} accent={accent} strokeWidth={strokeWidth} />
      <Line x={pointX} accent={accent} strokeWidth={strokeWidth} />
      <rect onMouseLeave={clearPoint} onMouseMove={setPosition} width={width} height={height} style={{ fill: 'transparent', stroke: 'transparent' }} />
    </g>
  );
};

InteractionLayer.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  accent: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onHover: PropTypes.func.isRequired,
};

InteractionLayer.defaultProps = {
  data: [],
  accent: 'black',
};

export default InteractionLayer;
