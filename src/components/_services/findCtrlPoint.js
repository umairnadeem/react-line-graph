import {
  parse,
  getLine,
  getInterceptWithPoint,
} from '../_helpers';

/**
 * Finds the control point for Bezier smoothing given a ratio
 * @param {Number} smoothing - The smoothing ratio, from 0 to 1
 * @param {(String\|Number[][])} args - String(s) or tuples of Cartesian coordinate points
 */
export const findCtrlPoint = (smoothing = 0, ...args) => {
  const points = args
    .filter((point) => point) // Filter out undefined values
    .map((point) => parse(point)); // Parse all strings into arrays

  // Extract start, end, and middle points
  const startPoint = points[0];
  const midPoint = points[Math.floor(points.length / 2)];
  const endPoint = points[points.length - 1];

  // Get line from point x to z
  const [slope] = getLine(startPoint, endPoint);

  // Get intercept of line which passes through y
  const intercept = getInterceptWithPoint(slope, midPoint);

  // Apply smoothing ratio
  let [outX] = parse(midPoint);
  const [anchor] = parse(startPoint);
  const proximity = (outX - anchor) * 0.5;
  outX -= Math.min(Math.abs(smoothing), 1) * proximity;
  const outY = slope * outX + intercept;

  return [outX || 0, outY || 0];
};
