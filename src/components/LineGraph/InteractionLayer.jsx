import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Point from './Point';
import Line from './Line';
import { useMousePosition, findMidpoints } from '../_helpers';

const InteractionLayer = ({
  calcWidth,
  calcHeight,
  adjData,
  sortedData,
  accent,
  strokeWidth,
  onHover,
}) => {
  // Store mouse position in state
  const [[x, y], setPosition] = useMousePosition([0, 0], calcWidth, calcHeight);

  // Store point position in state
  const [[pointX, pointY], setPoint] = useState([-calcWidth, -calcHeight]);

  // => Removes point from view
  const clearPoint = () => setPoint([-calcWidth, -calcHeight]);

  // Find midpoints of data-set (to toggle hover)
  const midpoints = adjData.map(findMidpoints);

  useEffect(() => {
    const index = midpoints.findIndex((point) => x <= point);
    if (adjData[index]) setPoint(adjData[index]);
    if (sortedData[index]) onHover(sortedData[index]);
  }, [x, y]);

  return (
    <g>
      <Point x={pointX} y={pointY} accent={accent} strokeWidth={strokeWidth} />
      <Line x={pointX} accent={accent} strokeWidth={strokeWidth} calcHeight={calcHeight} />
      <rect
        onMouseLeave={clearPoint}
        onMouseMove={setPosition}
        width={calcWidth}
        height={calcHeight}
        style={{ fill: 'transparent', stroke: 'red' }}
      />
    </g>
  );
};

InteractionLayer.propTypes = {
  calcWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  calcHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  adjData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  sortedData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  accent: PropTypes.string.isRequired,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onHover: PropTypes.func.isRequired,
};

export default InteractionLayer;
