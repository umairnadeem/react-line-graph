const def = (point) => `L${point.join(',')}`;

export const drawPath = (points, transform = def) => points
  .reduce((path, point, index) => (index ? `${path}${transform(point, index, points)}` : `M${point.join(',')}`));
