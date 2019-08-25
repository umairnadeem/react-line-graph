import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { drawPath } from '../_services';
import { smooth } from '../_transformations';

class LineGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;
    const string = drawPath(data, smooth, 0.4);
    return (
      <svg
        style={{ width: '100%', height: '100%' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path stroke="#000000" fill="none" strokeWidth="0.1" d={string} />
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
};

LineGraph.defaultProps = {
  data: [],
};

export default LineGraph;
