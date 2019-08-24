import { findCtrlPoint } from './findCtrlPoint';

export const smooth = (point, index, points, ratio) => `S${findCtrlPoint(
  ratio,
  points[index - 1],
  point,
  points[index + 1],
).join(',')} ${point.join(',')}`;
