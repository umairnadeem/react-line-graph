import React from 'react';
import PropTypes from 'prop-types';

const Line = ({ x }) => (
  <line x1={x} x2={x} y1={0} y2={100} strokeWidth="0.1" stroke="blue" />
);

Line.propTypes = {
  x: PropTypes.number,
};

Line.defaultProps = {
  x: -100,
};

export default Line;
