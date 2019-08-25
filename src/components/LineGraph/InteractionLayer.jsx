import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { getMousePosition } from '../_helpers';

const InteractionLayer = ({ width, height, handleHover }) => {
  const handleMove = useCallback((e) => {
    const [x, y] = getMousePosition(e);
    handleHover(x, y);
  });

  return (
    <rect onMouseMove={handleMove} width={width} height={height} style={{ fill: 'transparent', stroke: 'red' }} />
  );
};

InteractionLayer.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  handleHover: PropTypes.func.isRequired,
};

export default InteractionLayer;
