import React from 'react';
import renderer from 'react-test-renderer';
import ExternalLinks from './index';

describe('ExternalLinks', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = renderer.create(<ExternalLinks />);
    instance = component.getInstance();
  });

  it('matches snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
