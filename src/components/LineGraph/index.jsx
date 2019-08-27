import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InteractionLayer from './InteractionLayer';
import { drawPath } from '../_services';
import { smooth } from '../_transformations';
import { autoScale, invertY, parseData } from '../_helpers';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calcHeight: 0,
      calcWidth: 0,
    };
    this.container = React.createRef();
  }

  componentDidMount() {
    const { current: { clientHeight, clientWidth } } = this.container;
    this.setState({ calcHeight: clientHeight, calcWidth: clientWidth });
  }

  render() {
    const {
      data,
      smoothing,
      width,
      height,
      hover,
      fillBelow,
      accent,
      strokeWidth,
      onHover,
    } = this.props;
    const { calcHeight, calcWidth } = this.state;

    // Parse, sort and scale the data
    const sortedData = parseData(data).sort((a, b) => a[0] - b[0]);
    const adjData = invertY(autoScale(
      sortedData,
      0.1,
      calcWidth,
      calcHeight,
    ), calcHeight);

    const path = drawPath(adjData, smooth, smoothing);
    return (
      <svg ref={this.container} style={{ width, height }} viewBox={`0 0 ${calcWidth} ${calcHeight}`} preserveAspectRatio="none">
        <path stroke={accent} fill="none" strokeWidth={strokeWidth} d={path} />
        <path stroke="none" fill={fillBelow} d={`${path} V${calcHeight} H0 Z`} />
        {hover && (
        <InteractionLayer {...{
          calcWidth, calcHeight, adjData, sortedData, accent, strokeWidth, onHover,
        }}
        />
        )}
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
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hover: PropTypes.bool,
  fillBelow: PropTypes.string,
  accent: PropTypes.string,
  strokeWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onHover: PropTypes.func,
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
  onHover: () => {},
};

export default LineGraph;
