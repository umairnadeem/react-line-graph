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

export const normalize = (points = [], compression = 0, xCeil = 0, yCeil = 0) => {
  const [xMax, yMax, xMin, yMin] = points.reduce((accum, elem) => ([
    Math.max(elem[0], accum[0]),
    Math.max(elem[1], accum[1]),
    Math.min(elem[0], accum[2]),
    Math.min(elem[1], accum[3]),
  ]), [-Infinity, -Infinity, Infinity, Infinity]);
  const compFactor = (1 - Math.min(Math.abs(compression), 1));
  const xDiff = (xMax - xMin) || 1;
  const yDiff = (yMax - yMin) || 1;
  const xFactor = xCeil / xDiff;
  const yFactor = ((yCeil * compFactor) / yDiff) * compFactor;
  const xConst = xCeil - (xFactor * xMax);
  const yConst = yCeil * compFactor - (yFactor * yMax);
  return points.map(([x, y]) => [
    Number((x * xFactor + xConst).toFixed(2)),
    Number((y * yFactor + yConst).toFixed(2)),
  ]);
};

export const invertY = (data, yCeil = 100) => data.map(([x, y]) => {
  if (x !== undefined && y !== undefined) {
    return [x, yCeil - y];
  }
  return [];
});
