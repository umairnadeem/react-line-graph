import React from 'react';
import PropTypes from 'prop-types';

const Point = ({ x, y }) => {
  return (<circle cx={x} cy={y} r="0.5" fill="red" />);
};


Point.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

Point.defaultProps = {
  x: -100,
  y: -100,
};

export default Point;
