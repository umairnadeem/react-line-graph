const { drawPath } = require('../../src/components/_services');
const CONSTANTS = require('../_constants');

describe('Basic functionality of drawPath', () => {
  it('draws a path given integer coordinates', () => {
    const integerPath = drawPath(CONSTANTS.pointsWithIntegers);
    expect(integerPath).toBe('M0,10 L10,70 L20,45 L30,100 L40,10 L60,80');
  });

  it('draws a valid path upon given an unordered dataset', () => {
    const integerPath = drawPath(CONSTANTS.pointsUnordered);
    expect(integerPath).toBe('M0,10 L10,70 L20,45 L30,100 L40,10 L60,80');
  });

  it('draws a path given negative coordinates', () => {
    const negativePath = drawPath(CONSTANTS.pointsWithNegatives);
    expect(negativePath).toBe('M-60,80 L-30,100 L-10,-70 L0,-10 L20,-45 L40,-10');
  });

  it('draws a path given decimal coordinates', () => {
    const decimalPath = drawPath(CONSTANTS.pointsWithDecimals);
    expect(decimalPath).toBe('M-10,-7230.87 L0.001,-10.92 L20.21,-45');
  });
});

describe('Advanced functionality of drawPath', () => {
  it('draws a transformed path given a transformation function', () => {
    const transform = (point) => `H${point[0]}`;
    const integerPath = drawPath(CONSTANTS.pointsWithIntegers, transform);
    expect(integerPath).toBe('M0,10 H10 H20 H30 H40 H60');
  });

  it('passes in a payload to the transformation function', () => {
    const transform = (point, _index, _points, payload) => `H${point[0] + payload}`;
    const integerPath = drawPath(CONSTANTS.pointsWithIntegers, transform, 10);
    expect(integerPath).toBe('M0,10 H20 H30 H40 H50 H70');
  });
});
