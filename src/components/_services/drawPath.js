const defaultFn = (point) => `L${point.join(',')}`;

/**
 * Draws an SVG path given a collection of points and an optional transformation function
 * @param {Array.<Array>} points - A matrix of tuples representing Cartesian points
 * @param {Function} transform - (optional) A transformation callback function
 * @param {Object} payload - (optional) The payload for the transformation function
 */
export const drawPath = (points = [], transform = defaultFn, payload = 0) => points
  .sort((a, b) => a[0] - b[0]) // Sort the points by X values
  .reduce((path, point, index) => (
    index
      ? `${path} ${transform(point, index, points, payload)}`
      : `M${point.join(',')}`), '');
