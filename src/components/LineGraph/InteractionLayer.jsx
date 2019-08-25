import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { getMousePosition } from '../_helpers';

const InteractionLayer = ({ width, height }) => {
  const handleMove = useCallback((e) => {
    const [x, y] = getMousePosition(e);
  });

  return (
    <rect onMouseMove={handleMove} width={width} height={height} style={{ fill: 'transparent', stroke: 'red' }} />
  );
};

InteractionLayer.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default InteractionLayer;
