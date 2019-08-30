import { findCtrlPoint } from '../_services';

/**
 * A alternative transformation function that smooths out the lines using
 * cubic Bezier transformations
 * @param {Tuple} point - An array with two values, [x,y]
 * @param {Number} index - The index of the current point in the graph
 * @param {Array.<Array>} points - The entire points array
 * @param {Number} ratio - (optional) A smoothing ratio, from 0 to 1
 */
export const smoothAlt = (point = [0, 0], index = 0, points = [], ratio = 0) => `C${findCtrlPoint(
  ratio,
  points[index - 1],
  point,
  points[index + 1],
).join(',')} ${point.join(',')}`;
