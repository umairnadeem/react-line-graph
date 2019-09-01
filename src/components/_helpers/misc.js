const isPrimitive = (input) => Object(input) !== input;

// Parse objects and single-level arrays into array of tuples
export const parseData = (data) => {
  let output = [];
  if (Array.isArray(data)) {
    output = data.map((elem, i) => {
      if (Array.isArray(elem) && elem.length >= 2) {
        return elem.slice(0, 2);
      }
      if (typeof elem === 'object') {
        return [elem.x, elem.y];
      }
      if (isPrimitive(elem)) {
        return [elem, i];
      }
      return null;
    });
  } else throw new Error('Data must be of type array!');
  return output;
};
