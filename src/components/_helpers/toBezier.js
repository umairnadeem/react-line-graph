/**
 * Spits out a SVG Quadratic Bezier string
 * @param {String} from - The starting coordinate
 * @param {String} to - The ending coordinate
 * @param {Integer} amount - Amount of Bezier from 0 to 100
 */
const parse = (str) => str
  .trim()
  .split(',')
  .map((x) => parseInt(x, 10));

const getLine = (from, to) => {
  const [x1, y1] = parse(from);
  const [x2, y2] = parse(to);
  const slope = (y2 - y1) / (x2 - x1);
  const intercept = y1 - slope * x1;
  return [slope, intercept];
};

const getInterceptWithPoint = (slope, point) => {
  const [x, y] = parse(point);
  return y - slope * x;
};

export const findCtrlPoint = (x, y, z, adj = 0, reverse = false) => {
  if (typeof x !== 'string' || typeof y !== 'string' || typeof z !== 'string') {
    throw new Error('Coordinates must be of type string.');
  }

  // Get line from point x to z
  const [slope] = getLine(x, z);

  // Get intercept of line which passes through y
  const intercept = getInterceptWithPoint(slope, y);

  let [outX] = parse(y);
  outX += reverse ? -1 * adj : adj;
  const outY = slope * outX + intercept;
  return [outX, outY];
};
