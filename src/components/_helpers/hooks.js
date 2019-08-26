import { useEffect, useState, useCallback } from 'react';
import { getMousePosition } from './dom';

export const useMousePosition = () => {
  const [position, changePosition] = useState({ x: 0, y: 0 });
  const setPosition = useCallback((e) => {
    const [x, y] = getMousePosition(e);
    changePosition({ x, y });
  });
  return [[position.x, position.y], setPosition];
};
