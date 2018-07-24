import React from 'react';
import renderer from 'react-test-renderer';
import AnimatedGradient from './index';

jest.mock('utils/array-util', () => ({
  getRandomIndex: () => 0,
  rotate: () => [],
  toValueString: () => '',
  wrap: () => [],
}));

describe('AnimatedGradient', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = renderer.create(<AnimatedGradient />);
    instance = component.getInstance();
  });

  it('matches snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe('has a getFocusValues function that', () => {
    it('returns an array of random percentages with the passed length', () => {
      const focusValues = instance.getFocusValues(10);
      expect(focusValues.length).toEqual(10);
      expect(focusValues).toEqual(expect.any(Array));
    });
  });
});
