import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ x, accent, strokeWidth }) => (
  <line x1={x} x2={x} y1={0} y2={100} strokeWidth={strokeWidth / 2} stroke={accent} />
);

Line.propTypes = {
  x: PropTypes.number,
  accent: PropTypes.string.isRequired,
  strokeWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Line.defaultProps = {
  x: -100,
};

export default Line;
