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

export const getDimensions = (event) => {
  const { width, height } = event.target.getBoundingClientRect();
  return [width, height];
};

/**
 * Gets the position of the mouse relative to the target of an event listener
 * @param {Object} event - the event object from an event listener
 */
export const getMousePosition = (event) => {
  const { nativeEvent: { offsetX, offsetY } } = event;
  return [offsetX, offsetY];
};
