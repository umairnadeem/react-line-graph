# React Line Graph
> A lightweight and simple line graph component.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Supports Bezier smoothing, easy customization, and hover interactivity.

![Example demo](demo/demo2.gif)

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#Usage)
4. [Development Setup](#Development-setup)
5. [Testing](#Testing)
6. [Release History](#release-history)
7. [Meta](#meta)
8. [Contributing](#contributing)
9. [To-do](#todo)
10. [Challenges](#challenges)
11. [My Solutions](#my-solutions)
12. [Notable Features](#notable-features)

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8.10.0

## Installation
OS X & Linux:
```sh
npm install react-line-graph
```
## Usage

Usage is quite simple. First, import the component (React 16.8.0 or higher is required as an installed dependency or CDN):
```sh
import LineGraph from 'react-line-graph'
```

Render the line:

```sh
const data = [10,0,-2.5,540]; // LineGraph reads these as y-values, automatically spaces them out evenly
<LineGraph data={data}/>
```
or 
```sh
const data = [[0,20], [-30,40], [-88.9, 9]]; // LineGraph reads these as x,y pairs
<LineGraph data={data}/>
```
or 
```sh
const data = [ { x: 10, y: 2 }, {...}];
<LineGraph data={data}/>
```

Customizing your graph is easy:
```sh
const data = [10,0,-2.5,540];
const props = {
  data,
  smoothing: 0.3,
  accent: 'palevioletred'
  fillBelow: 'rgba(200,67,23,0.1)',
  hover: true,
};

<LineGraph {...props}/>
```
_This renders a smooth graph with hovering enabled. The y-value is passed down to child components upon hover by default, but this can be changed._

### Props ###
| Key       | Type             | Default          | Description                                                                                                                        |
|-----------|------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------|
| data      | Array (required) | []               | The data points to render. May be of form [a,...,b], [[a,b],...,[c,d]], or [{x: a, y: b},...,{...}] where a,b,c,d are some numbers |
| smooth    | Number (0 to 1)  | 0                | The Bezier smoothing ratio to apply.                                                                                               |
| accent      | String           | 'black' | The color of the line accents                                                                                         |
| fillBelow | String           | 'none'           | The color of the fill below the line.                                                                                              |
| fillAbove* | String           | 'none'           | The color of the fill above the line.                                                                                              |
| hover     | Boolean          | false            | Enables hovering. Hovering will render a line and will pass on the hovered value to children (this component is child-aware).      |
| gridX*    | Boolean          | false            | Shows the grid-lines along the x-axis (vertical lines).                                                                            |
| gridY*    | Boolean          | false            | Shows the grid-lines along the y-axis (horizontal lines).                                                                          |
| debug*     | Boolean          | false            | Displays debug information on graph, including anchor and control points.                                                          |
| width     | String           | '100%'           | The width of the component within a container element.                                                                             |
| height    | String           | '100%'           | The height of the component within a container element.                                                                            |
| compression| Number           | 0.1           | The compression factor of the data-set from 0 to 1. Compresses data linearly from top and bottom along the Y-axis.                            |
| onHover| Function           | () => {}           | The callback function to which an array containing currently hovered point ([x, y]) is passed when the user hovers. Useful for displaying the hovered value in the parent component (the one you write). Only active when 'hover' is set to true.          |

_* refers to proposed feature (not yet available)._  
_For more examples and usage, please refer to the [Wiki][wiki] (under development)._

## Development setup
For developers (OS X / Linux):

From within the root directory: 
```sh
npm install
npm start
```
## Testing
From within the root directory: 
```sh
npm test
```

## Release History
* 1.0.6
    * A minor upgrade from previous release. Updated README, change export to default.
    * CHANGE: minor bug-fixes, semantic changes.
* 1.0.3
    * First patched release
    * CHANGE: bug-fixes, new features. See release for details.
* 1.0.0
    * The first proper release
    * CHANGE: Add Bezier smoothing transformation function
* 0.1.0
    * Work in progress

## Meta

Umair Nadeem – [@UmairNadeem](https://github.com/umairnadeem) – umair@umairnadeem.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/umairnadeem/react-line-graph](https://github.com/umairnadeem/)

## Contributing

1. Fork it (<https://github.com/umairnadeem/react-line-graph/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/umairnadeem/react-line-graph/wiki

## Feature Requests
- Put all helper methods in a class
- Fix smoothing algorithm to be more precise using cubic Beziers
- Clean up prop passing in InteractionLayer*
- Refactor hover to not use setState (better performance)
- Update compression algorithm to be two-way (compress highs and lows)*
- Allow 3 different data input types (create helper function 'parse')
- Remove unnecessary re-render of graph upon setState in parent component
- Refactor LineGraph's index.jsx with React Hooks*
- Publish on NPM, update README tags*
- Allow multiple transformation functions in drawPath function, using piping
- Prevent re-run of findCtrlPoint function upon hover
- Allow exponential smoothing for large data-sets
- Allow multiple lines

## Challenges
- Challenge #1: Make hovering compatible with responsive height/width
- Challenge #2: Pass up hovered point information into parent
- Challenge #3: Allow parent to setState with point information without triggering unecessary re-render
- Challenge #4: Writing a smoothing algorithm using cubic Bezier without artifacts
- Challenge #5: Modular transformation callback in drawPath helper

## My Solutions
- Challenge #1: I used 3 data points per axis (SVG viewBox dimensions, cursor position, current dimensions). The viewBox dimensions are set upon initial rendering of the graph, while the current dimensions are calculated upon each hover using the Element.getBoundingClientRect() native browser method. The cursor position is calculated relative to the viewBox value, and the current dimensions are the most up-to-date dimensions. These 3 data points allow me to ensure accuracy of hover coordinates even after the line-graph changes dimensions after being rendered. More specifically, the hovered position relative to the viewBox can be obtained by the formula: (cursor position / current dimensions) * viewBox dimensions. This ensures that hover edge-cases (such as size-changes) are handled effectively. 
- Challenge #2: To allow maximum user flexibility for handling hover events, I use a 'render prop' pattern where the user can pass in the component to be rendered (or function to be called) into the line-graph component so that the hovered coordinates can be passed into the component (function). This way, the user has full flexibility as to what is displayed when a point is hovered upon and where it is displayed.
- Challenge #3: (pending) Use shouldComponentUpdate or pure components to do a shallow comparison of props, preventing extra re-renders
- Challenge #4: I solved this problem by using 3 data points per control point calculation. For each point, I look at the points immediately following and prior to the focal point in question. I draw a line between the aforementioned two surrounding points, and shift the line by a constant factor so that it intercepts the focal point. I then set the control point on this line. The smoothing factor determines how far away the X-values of the control point and focus point are. This finds one control point - the other control point is a reflection of this control point (calculated by reflecting the control point along a line perpendicular to the focal point and prior point).
- Challenge #5: (pending) I will likely use a pipe function to allow multiple transformation functions instead of one

## Notable features
- Automatic data scaling
- Responsive hovering
- Data compression along Y-axis
- Smoothing parameter for aesthetics
- Easy customization (with support for SVG gradients and CSS color notation)
- Small library size (due to sharing the React library)
- Easy feature expandability due to modular design