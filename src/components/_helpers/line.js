export const parse = (input) => (typeof input === 'string'
  ? input
    .trim()
    .split(',')
    .map((x) => parseInt(x, 10))
  : input);

export const getLine = (from, to) => {
  const [x1, y1] = parse(from);
  const [x2, y2] = parse(to);
  const slope = (y2 - y1) / (x2 - x1);
  const intercept = y1 - slope * x1;
  return [slope, intercept];
};

export const getInterceptWithPoint = (slope, point) => {
  const [x, y] = parse(point);
  return y - slope * x;
};

export const findMidpoints = ([tuple], index, points) => {
  const next = points[index + 1] ? points[index + 1][0] : tuple;
  return (tuple + next) / 2;
};

export const adjustScale = (points, compression = 0, xCeil = 100, yCeil = 100) => {
  const [xMax, yMax, yMin] = points.reduce((accum, elem) => ([
    Math.max(elem[0], accum[0]),
    Math.max(elem[1], accum[1]),
    Math.min(elem[1], accum[1]),
  ]), [-Infinity, -Infinity, Infinity]);
  const compressionFactor = (yMax - yMin) * compression;
  const xFactor = xCeil / (xMax || 1);
  const yFactor = Math.min(yCeil / (yMax || 1) + compressionFactor, yCeil);
  return points.map((elem) => [elem[0] * xFactor, elem[1] * yFactor]);
};
