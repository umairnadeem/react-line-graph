const def = (point) => `L${point.join(',')}`;

/**
 * Draws an SVG path given a collection of points and an optional transformation function
 * @param {Array.<Array>} points - A matrix of tuples representing Cartesian points
 * @param {Function} transform - (optional) A transformation function
 * @param {Object} payload - (optional) The payload for the transformation function
 */
export const drawPath = (points = [], transform = def, payload) => points
  .reduce((path, point, index) => (
    index
      ? `${path} ${transform(point, index, points, payload)}`
      : `M${point.join(',')}`), []);
