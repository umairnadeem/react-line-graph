import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

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
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  calcWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  calcHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node,
};

ResponsiveSvg.defaultProps = {
  children: null,
};

export default ResponsiveSvg;
