import { useState, useCallback } from 'react';
import { getMousePosition } from './dom';

export const useMousePosition = (width, height) => { // TODO: include initial state parameter
  const [position, changePosition] = useState({ x: 0, y: 0 }); // TODO: refactor with array
  const setPosition = useCallback((e) => {
    const [x, y] = getMousePosition(e, width, height);
    if (x <= width && y <= height) {
      changePosition({ x, y });
    } else changePosition({ x: -1000, y: -1000 });
  });

  return [[position.x, position.y], setPosition];
};
