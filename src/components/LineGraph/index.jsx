import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InteractionLayer from './InteractionLayer';
import { drawPath } from '../_services';
import { smooth } from '../_transformations';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      data, // TODO: sort data and convert to tuple array
      smoothing,
      width,
      height,
      hover,
      fillBelow,
      accent,
      strokeWidth,
    } = this.props;
    const path = drawPath(data, smooth, smoothing);
    return (
      <svg
        style={{ width, height }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path stroke={accent} fill="none" strokeWidth={strokeWidth} d={path} />
        <path stroke="none" fill={fillBelow} d={`${path} V100 L 0,100 Z`} />
        {hover && <InteractionLayer {...{ height, width, data, accent, strokeWidth }} />}
      </svg>
    );
  }
}

LineGraph.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  ]),
  smoothing: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
  hover: PropTypes.bool,
  fillBelow: PropTypes.string,
  accent: PropTypes.string,
  strokeWidth: PropTypes.string,
};

LineGraph.defaultProps = {
  data: [],
  smoothing: 0,
  width: '100%',
  height: '100%',
  hover: false,
  fillBelow: 'none',
  accent: 'black',
  strokeWidth: '0.5',
};

export default LineGraph;
