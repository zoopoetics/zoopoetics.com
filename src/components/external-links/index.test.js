import React from 'react';
import renderer from 'react-test-renderer';
import ExternalLinks from './index';

jest.mock('styled-icons/fa-brands/Github', () => ({
  Github: () => 'Github',
}));
jest.mock('styled-icons/fa-brands/Linkedin', () => ({
  Linkedin: () => 'Linkedin',
}));
jest.mock('styled-icons/fa-brands/Twitter', () => ({
  Twitter: () => 'Twitter',
}));

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
