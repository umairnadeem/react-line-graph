import React from 'react';
import types from '../_types';

const Fill = ({ fillBelow, path, calcHeight }) => (
  path && <path stroke="none" fill={fillBelow} d={`M0,0${path} V${calcHeight} H0 Z`} />
);

Fill.propTypes = {
  fillBelow: types.fillBelow.isRequired,
  calcHeight: types.calcHeight.isRequired,
  path: types.path.isRequired,
};

export default Fill;
