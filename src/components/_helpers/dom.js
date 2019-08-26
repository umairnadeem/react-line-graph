/**
 * Creates a DOM SVG-node with specified attributes and returns it
 * @param {String} tag - the XML tag for your element
 * @param {Object} attr - the attributes for the element
 */
export const createSVGElement = (tag, attr) => {
  const namespace = 'http://www.w3.org/2000/svg';
  const element = document.createElementNS(namespace, tag);
  const attributes = Object.keys(attr);
  attributes.forEach((attribute) => {
    element.setAttributeNS(namespace, attribute, attributes[attribute]);
  });
  return element;
};

const getDimensions = (event) => {
  const { height, width } = event.target.getBoundingClientRect();
  return [height, width];
};

/**
 * Gets the position of the mouse relative to the target of an event listener
 * @param {Object} event - the event object from an event listener
 */
export const getMousePosition = (event) => {
  const [height, width] = getDimensions(event);
  const { nativeEvent: { offsetX, offsetY } } = event;
  const x = Number(((offsetX / width) * 100).toFixed(2));
  const y = Number(((offsetY / height) * 100).toFixed(2));
  return [x, y];
};
