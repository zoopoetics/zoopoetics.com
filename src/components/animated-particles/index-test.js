import React from 'react';
import renderer from 'react-test-renderer';
import ParticlesAnimated from './index';

describe('ParticlesAnimated', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = renderer.create(<ParticlesAnimated />);
    instance = component.getInstance();
  });

  it('matches snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
