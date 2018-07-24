/*
Returns a random index from within the bounds
of the passed array.
*/
export const getRandomIndex = (arr = []) => {
  return arr && arr.length ? Math.round(Math.random() * (arr.length - 1)) : 0;
};

/*
Returns a copy of the passed array rotated
left or right, based on the passed count.
*/
export const rotate = (arr = [], count = 0) => {
  const output = [...arr];
  let counter = Math.abs(count);

  while (counter > 0) {
    counter--;
    if (count > 0) {
      // Positive, rightward rotation
      output.unshift(output.pop());
    } else {
      // Negative, leftward rotation
      output.push(output.shift());
    }
  }

  return output;
};

/*
Returns the passed array as a string of
semicolon-separated values.
*/
export const toValueString = (arr = []) =>
  arr.length ? `${arr.join('; ')};` : '';

/*
Returns a copy of the passed array with the
the first element added to the end also.
*/
export const wrap = (arr = []) => {
  return arr && arr.length ? [...arr, arr[0]] : [];
};
