import React from 'react';
import types from '../_types';

const Line = ({
  x, accent, strokeWidth, calcHeight,
}) => (
  <line x1={x} x2={x} y1={0} y2={calcHeight} strokeWidth={strokeWidth / 2} stroke={accent} />
);

Line.propTypes = {
  x: types.x,
  accent: types.accent.isRequired,
  strokeWidth: types.strokeWidth.isRequired,
  calcHeight: types.calcHeight.isRequired,
};

Line.defaultProps = {
  x: -100,
};

export default Line;
