import { useState } from 'react';
import { getMousePosition } from './dom';

export const useMousePosition = (initialState = [0, 0], calcWidth, calcHeight) => {
  const [position, changePosition] = useState(initialState);
  const setPosition = (e) => {
    const [x, y] = getMousePosition(e, calcWidth, calcHeight);
    if (x <= calcWidth && y <= calcHeight) {
      changePosition([x, y]);
    } else changePosition([-1 * calcWidth, -1 * calcHeight]);
  };

  return [position, setPosition];
};
