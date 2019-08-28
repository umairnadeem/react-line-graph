import React from 'react';
import types from '../_types';

// TODO: add inverse scaling to preserve circle aspect ratio, make radius and fill dynamic
const Point = ({
  x, y, accent, strokeWidth,
}) => (
  <circle cx={x} cy={y} r="5" fill="white" stroke={accent} strokeWidth={strokeWidth / 2} />
);

Point.propTypes = {
  x: types.x,
  y: types.y,
  accent: types.accent.isRequired,
  strokeWidth: types.strokeWidth.isRequired,
};

Point.defaultProps = {
  x: -100,
  y: -100,
};

export default Point;
