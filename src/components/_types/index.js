import {
  shape, number, string, oneOfType, func, arrayOf, bool, node,
} from 'prop-types';

export default {
  data: oneOfType([arrayOf(arrayOf(number)), arrayOf(number), shape({ x: number, y: number })]),
  smoothing: number,
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
  hover: bool,
  fillBelow: string,
  accent: string,
  strokeWidth: oneOfType([string, number]),
  onHover: func,
  compression: number,
  calcWidth: oneOfType([string, number]),
  calcHeight: oneOfType([string, number]),
  adjData: arrayOf(arrayOf(number)),
  sortedData: arrayOf(arrayOf(number)),
  children: node,
  path: oneOfType([string, arrayOf(string)]),
  x: number,
  y: number,
};
