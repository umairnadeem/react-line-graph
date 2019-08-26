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
