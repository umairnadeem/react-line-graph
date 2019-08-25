export const stdevX = (data) => {
  const barX = data.reduce((sum, point) => sum + point[0], 0) / data.length;
  const varX = data.reduce(
    (variance, point) => variance + ((point[0] - barX) ** 2),
    0,
  ) / data.length;
  return Math.sqrt(varX).toFixed(2);
};

export const getProximityX = (data) => Math.abs(
  data.reduce(
    (accum, point, i, points) => {
      const x1 = point[0];
      const x2 = points[i + 1] ? points[i + 1][0] : x1;
      return accum + x2 - x1;
    }, 0,
  ) / data.length,
).toFixed(2);
