import {getRandomIndex, rotate, toValueString, wrap} from 'utils/array-util';

describe('ArrayUtil', () => {
  describe('exports a getRandomIndex function that', () => {
    it('returns a random index from the passed array', () => {
      const arr = Array.from({length: 10});
      expect(getRandomIndex(arr)).toEqual(expect.any(Number));
    });
    it('returns 0 for empty input', () => {
      expect(getRandomIndex()).toEqual(0);
      expect(getRandomIndex(null)).toEqual(0);
    });
  });

  describe('exports a rotate function that', () => {
    const arr = [1, 2, 3, 4, 5];
    it('rotates an array to the right based on positive count', () => {
      expect(rotate(arr, 1)).toEqual([5, 1, 2, 3, 4]);
      expect(rotate(arr, 2)).toEqual([4, 5, 1, 2, 3]);
      expect(rotate(arr, 3)).toEqual([3, 4, 5, 1, 2]);
    });
    it('rotates an array to the left based on negative count', () => {
      expect(rotate(arr, -1)).toEqual([2, 3, 4, 5, 1]);
      expect(rotate(arr, -2)).toEqual([3, 4, 5, 1, 2]);
      expect(rotate(arr, -3)).toEqual([4, 5, 1, 2, 3]);
    });
    it('does nothing if count is 0', () => {
      expect(rotate(arr, 0)).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('exports a toValueString function that', () => {
    it('returns the passed array as a semicolon-separated string', () => {
      const arr = [0, 1, 2];
      expect(toValueString(arr)).toEqual('0; 1; 2;');
    });
    it('returns an empty string for empty input', () => {
      expect(toValueString()).toEqual('');
    });
  });

  describe('exports a wrap function that', () => {
    it('returns the passed array with the first element duplicated at the end', () => {
      const arr = [0, 1, 2];
      expect(wrap(arr)).toEqual([0, 1, 2, 0]);
    });
    it('returns an empty array for empty input', () => {
      expect(wrap()).toEqual([]);
    });
  });
});
