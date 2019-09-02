const { parseData } = require('../../src/components/_helpers/misc');
const CONSTANTS = require('../_constants');

describe('Basic functionality of misc helper functions', () => {
  it('should leave input of x, y tuples untouched', () => {
    const data = CONSTANTS.decimals;
    const parsed = parseData(data);
    expect(parsed).toMatchObject(data);
  });

  it('should correctly parse input of plain y-coordinates', () => {
    const data = [20, 30, 40, -90];
    const parsed = parseData(data);
    const expected = data.map((y, x) => [x, y]);
    expect(parsed).toMatchObject(expected);
  });

  it('should correctly parse input of objects', () => {
    const data = [{ x: 20, y: 0 }, { x: -200, y: 0.3 }, { x: -12.333, y: 83, z: 23 }];
    const parsed = parseData(data);
    const expected = data.map((point) => [point.x, point.y]);
    expect(parsed).toMatchObject(expected);
  });
});
