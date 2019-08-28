import React, { useState, useEffect, useRef } from 'react';
import { drawPath } from '../_services';
import { smooth } from '../_transformations';
import { normalize, invertY, parseData } from '../_helpers';
import InteractionLayer from './InteractionLayer';
import ResponsiveSvg from './ResponsiveSvg';
import Path from './Path';
import Fill from './Fill';
import types from '../_types';

const LineGraph = ({
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
}) => {
  const [[calcWidth, calcHeight], setDimensions] = useState([0, 0]);
  const container = useRef();

  // Parse, sort and normalize the data to calculate path
  const sortedData = parseData(data).sort((a, b) => a[0] - b[0]);
  const adjData = invertY(normalize(sortedData, compression, calcWidth, calcHeight), calcHeight);
  const path = drawPath(adjData, smooth, smoothing);

  useEffect(() => {
    const {
      current: { clientWidth, clientHeight },
    } = container;
    setDimensions([clientWidth, clientHeight]);
  }, []);

  return (
    <ResponsiveSvg
      ref={container}
      {...{
        width,
        height,
        calcWidth,
        calcHeight,
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
};

LineGraph.propTypes = {
  data: types.data,
  smoothing: types.smoothing,
  width: types.width,
  height: types.height,
  hover: types.hover,
  fillBelow: types.fillBelow,
  accent: types.accent,
  strokeWidth: types.strokeWidth,
  onHover: types.onHover,
  compression: types.compression,
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
