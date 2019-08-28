import { useState, useCallback } from 'react';
import { getMousePosition, getDimensions } from './dom';

export const useMousePosition = () => { // TODO: include initial state parameter
  const [position, changePosition] = useState({ x: 0, y: 0 }); // TODO: refactor with array
  const setPosition = useCallback((e) => {
    const [x, y] = getMousePosition(e);
    const [width, height] = getDimensions(e);
    if (x <= width && y <= height) {
      changePosition({ x, y });
    } else changePosition({ x: -1 * width, y: -1 * height });
  });

  return [[position.x, position.y], setPosition];
};
