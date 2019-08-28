import React from 'react';
import PropTypes from 'prop-types';

const Fill = ({ fillBelow, path, calcHeight }) => (
  path && <path stroke="none" fill={fillBelow} d={`M0,0${path} V${calcHeight} H0 Z`} />
);

Fill.propTypes = {
  fillBelow: PropTypes.string.isRequired,
  calcHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Fill;
