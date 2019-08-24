const parse = (input) => (typeof input === 'string'
  ? input
    .trim()
    .split(',')
    .map((x) => parseInt(x, 10))
  : input);

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

/**
 * Finds the control point for Bezier smoothing given a ratio
 * @param {Number} smoothing - The smoothing ratio, from 0 to 1
 * @param {String/Array} args - String(s) or tuples of Cartesian coordinate points
 */
export const findCtrlPoint = (smoothing = 0, ...args) => {
  // Filter out undefined values
  let points = args.filter((point) => point);

  // Parse all strings into arrays
  points = points.map((point) => parse(point));

  // Extract first, last, and middle
  const firstPoint = points[0];
  const midPoint = points[Math.floor(points.length / 2)];
  const endPoint = points[points.length - 1];

  // Get line from point x to z
  const [slope] = getLine(firstPoint, endPoint);

  // Get intercept of line which passes through y
  const intercept = getInterceptWithPoint(slope, midPoint);

  // Apply smoothing ratio
  let [outX] = parse(midPoint);
  outX += -1 * smoothing; // TODO: convert to ratio from 0 to 1
  const outY = slope * outX + intercept;

  return [outX, outY];
};
