module.exports = {
  pointsWithIntegers: [[0, 10], [10, 70], [20, 45], [30, 100], [40, 10], [60, 80]],
  pointsWithNegatives: [[0, -10], [-10, -70], [20, -45], [-30, 100], [40, -10], [-60, 80]],
  pointsWithDecimals: [[0.001, -10.92], [-10, -7230.87], [20.2100, -45.00000]],
  pointsUnordered: [[20, 45], [0, 10], [40, 10], [10, 70], [60, 80], [30, 100]],
  pointsRandom: (() => {
    const data = [];
    for (let i = 0; i < 100; i += 1) {
      data.push([i, Math.random() * 20]);
    }
    return data;
  })(),
};
