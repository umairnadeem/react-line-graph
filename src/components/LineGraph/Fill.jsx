import React from 'react';
import PropTypes from 'prop-types';

const Fill = ({ fillBelow, path, calcHeight }) => (
  <path stroke="none" fill={fillBelow} d={`${path} V${calcHeight} H0 Z`} />
);

Fill.propTypes = {
  fillBelow: PropTypes.string.isRequired,
  calcHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  path: PropTypes.string.isRequired,
};

export default Fill;
