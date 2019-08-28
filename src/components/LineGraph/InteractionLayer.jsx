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
  const [[x, y], setPosition] = useMousePosition([0, 0], calcWidth, calcHeight);
  const [[pointX, pointY], setPoint] = useState([-calcWidth, -calcHeight]);
  const clearPoint = () => setPoint([-calcWidth, -calcHeight]);
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
  accent: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onHover: PropTypes.func.isRequired,
};

InteractionLayer.defaultProps = {
  accent: 'black',
};

export default InteractionLayer;
