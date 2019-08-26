import React from 'react';
import PropTypes from 'prop-types';

const Point = ({ x, y }) => (<circle cx={x} cy={y} radius="2" fill="red" />);

Point.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

Point.defaultProps = {
  x: -100,
  y: -100,
};

export default Point;
