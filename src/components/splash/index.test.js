import React from 'react';
import renderer from 'react-test-renderer';
import Splash from './index';

describe('Splash', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = renderer.create(<Splash />);
    instance = component.getInstance();
  });

  it('matches snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
