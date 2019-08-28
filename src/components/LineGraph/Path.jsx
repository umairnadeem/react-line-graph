import React from 'react';
import types from '../_types';

const Path = ({ accent, strokeWidth, path }) => (
  <path fill="none" stroke={accent} strokeWidth={strokeWidth} d={path} />
);

Path.propTypes = {
  accent: types.accent.isRequired,
  strokeWidth: types.strokeWidth.isRequired,
  path: types.path.isRequired,
};

export default Path;
