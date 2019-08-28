import React, { useEffect, useState } from 'react';
import Point from './Point';
import Line from './Line';
import { useMousePosition, findMidpoints } from '../_helpers';
import types from '../_types';

const InteractionLayer = ({
  calcWidth,
  calcHeight,
  adjData,
  sortedData,
  accent,
  strokeWidth,
  onHover,
}) => {
  // use custom hooks to calculate mouse position
  const [[x, y], setPosition] = useMousePosition([0, 0], calcWidth, calcHeight);
  const [[pointX, pointY], setPoint] = useState([-calcWidth, -calcHeight]);
  const midpoints = adjData.map(findMidpoints);
  const clearPoint = () => setPoint([-calcWidth, -calcHeight]);

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
        style={{ fill: 'transparent', stroke: 'transparent' }}
      />
    </g>
  );
};

InteractionLayer.propTypes = {
  calcWidth: types.calcWidth.isRequired,
  calcHeight: types.calcHeight.isRequired,
  adjData: types.adjData.isRequired,
  sortedData: types.sortedData.isRequired,
  accent: types.accent.isRequired,
  strokeWidth: types.strokeWidth.isRequired,
  onHover: types.onHover.isRequired,
};

export default InteractionLayer;
