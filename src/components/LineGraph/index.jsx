import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { drawPath } from '../_services';
import { smooth } from '../_transformations';
import { autoScale, invertY, parseData } from '../_helpers';
import InteractionLayer from './InteractionLayer';
import ResponsiveSvg from './ResponsiveSvg';
import Path from './Path';
import Fill from './Fill';

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
    const {
      current: { clientHeight, clientWidth },
    } = this.container;
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
      compression,
    } = this.props;

    const { calcHeight, calcWidth } = this.state;

    // Parse, sort and scale the data
    const sortedData = parseData(data).sort((a, b) => a[0] - b[0]);
    const adjData = invertY(autoScale(sortedData, compression, calcWidth, calcHeight), calcHeight);

    const path = drawPath(adjData, smooth, smoothing);
    return (
      <ResponsiveSvg
        ref={this.container}
        {...{
          width, height, calcWidth, calcHeight,
        }}
      >
        <Path {...{ accent, strokeWidth, path }} />
        <Fill {...{ calcHeight, fillBelow, path }} />
        {hover && (
          <InteractionLayer
            {...{
              calcWidth,
              calcHeight,
              adjData,
              sortedData,
              accent,
              strokeWidth,
              onHover,
            }}
          />
        )}
      </ResponsiveSvg>
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
  compression: PropTypes.number,
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
  compression: 0,
};

export default LineGraph;
