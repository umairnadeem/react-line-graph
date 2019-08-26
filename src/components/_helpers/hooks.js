import { useState, useCallback } from 'react';
import { getMousePosition } from './dom';

export const useMousePosition = () => { // TODO: include initial state parameter
  const [position, changePosition] = useState({ x: 0, y: 0 }); // TODO: refactor with array
  const setPosition = useCallback((e) => {
    const [x, y] = getMousePosition(e);
    if (x <= 99 && y <= 99) {
      changePosition({ x, y });
    } else changePosition({ x: -100, y: -100 });
  });

  return [[position.x, position.y], setPosition];
};
