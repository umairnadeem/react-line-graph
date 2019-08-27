import React from 'react';
import PropTypes from 'prop-types';

// TODO: add inverse scaling to preserve circle aspect ratio, make radius and fill dynamic
const Point = ({ x, y, accent, strokeWidth }) => (<circle cx={x} cy={y} r="5" fill="white" stroke={accent} strokeWidth={strokeWidth / 2} />);


Point.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  accent: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

Point.defaultProps = {
  x: -100,
  y: -100,
  accent: 'black',
};

export default Point;
