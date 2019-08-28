import { useState, useCallback } from 'react';
import { getMousePosition, getDimensions } from './dom';

export const useMousePosition = (initialState = [0, 0]) => {
  const [position, changePosition] = useState(initialState);
  const setPosition = useCallback((e) => { // TODO: useCallback unnecessary?
    const [x, y] = getMousePosition(e);
    const [width, height] = getDimensions(e);
    if (x <= width && y <= height) {
      changePosition([x, y]);
    } else changePosition([-1 * width, -1 * height]);
  });

  return [position, setPosition];
};
