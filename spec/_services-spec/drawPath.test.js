const { drawPath } = require('../../src/components/_services');
const CONSTANTS = require('../_constants');

describe('Basic functionality of drawPath', () => {
  it('draws a path given integer coordinates', () => {
    const integerPath = drawPath(CONSTANTS.pointsWithIntegers);
    expect(integerPath).toBe('M0,10 L10,70 L20,45 L30,100 L40,10 L60,80');
  });

  it('draws a path given negative coordinates', () => {
    const negativePath = drawPath(CONSTANTS.pointsWithNegatives);
    expect(negativePath).toBe('M0,-10 L-10,-70 L20,-45 L-30,100 L40,-10 L-60,80');
  });

  it('draws a path given decimal coordinates', () => {
    const decimalPath = drawPath(CONSTANTS.pointsWithDecimals);
    expect(decimalPath).toBe('M0.001,-10.92 L-10,-7230.87 L20.21,-45');
  });
});
