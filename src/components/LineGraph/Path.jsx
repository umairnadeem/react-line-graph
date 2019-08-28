import React from 'react';
import PropTypes from 'prop-types';

const Path = ({ accent, strokeWidth, path }) => (
  <path fill="none" stroke={accent} strokeWidth={strokeWidth} d={path} />
);

Path.propTypes = {
  accent: PropTypes.string.isRequired,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  path: PropTypes.string.isRequired,
};

export default Path;
