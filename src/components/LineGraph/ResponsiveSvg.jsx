import React, { forwardRef } from 'react';
import types from '../_types';

const ResponsiveSvg = forwardRef(({
  width, height, calcWidth, calcHeight, children,
}, ref) => (
  <svg
    style={{ width, height }}
    viewBox={`0 0 ${calcWidth} ${calcHeight}`}
    preserveAspectRatio="none"
    ref={ref}
  >
    {children}
  </svg>
));

ResponsiveSvg.propTypes = {
  width: types.width.isRequired,
  height: types.height.isRequired,
  calcWidth: types.calcWidth.isRequired,
  calcHeight: types.calcHeight.isRequired,
  children: types.children,
};

ResponsiveSvg.defaultProps = {
  children: null,
};

export default ResponsiveSvg;
