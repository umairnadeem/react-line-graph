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

export const findCtrlPoint = (adj = 0, ...args) => {
  args.forEach((point) => {
    if (typeof point !== 'string' || !args.length) {
      throw new Error('Coordinates must be defined and of type string.');
    }
  });
  const firstPoint = args[0];
  const midPoint = args[Math.floor(args.length / 2)];
  const endPoint = args[args.length - 1];

  // Get line from point x to z
  const [slope] = getLine(firstPoint, endPoint);

  // Get intercept of line which passes through y
  const intercept = getInterceptWithPoint(slope, midPoint);

  let [outX] = parse(midPoint);
  outX += -1 * adj;
  const outY = slope * outX + intercept;
  return [outX, outY];
};
