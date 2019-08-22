/**
 * Spits out a SVG Quadratic Bezier string
 * @param {String} from - The starting coordinate
 * @param {String} to - The ending coordinate
 * @param {Integer} amount - Amount of Bezier from 0 to 100
 */
export const toBezier = (from, to, amount) => {



  const intercept = a[1] - slope * a[0];
  const midX = a[0] + (b[0] - a[0]) / 2;
  const midY = slope * (midX) + intercept;
  const perpSlope = -1 * (1 / slope);
  const perpIntercept = midY - perpSlope * midX;
  const outputX = midX - amount;
  const outputY = perpSlope * outputX + perpIntercept;
  return `S${outputX},${outputY} ${b.join(',')}`;
};

export const getSlope = (from, to) => {
  const parse = (str) => str
    .trim()
    .split(',')
    .map((x) => parseInt(x, 10));
  const a = parse(from);
  const b = parse(to);
  const slope = (b[1] - a[1]) / (b[0] - a[0]);
  return slope;
};

export const findCtrlPoint = (x, y, z, amount = 0) => {
  if (typeof x !== 'string' || typeof y !== 'string' || typeof z !== 'string') {
    throw new Error('Coordinates must be of type string.');
  }
};
