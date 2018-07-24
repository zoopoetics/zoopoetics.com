import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${styledNormalize}

  html,
  body {
    background-color: white;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  body {
    background-color: white;
    color: white;
    font-family: 'Lato', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }

  h1 {
    font-size: calc(1rem * 4);
  }

  h2 {
    font-size: calc(1rem * 2);
  }

  h3 {
    font-size: calc(1rem * 1.75);
  }

  h4 {
    font-size: calc(1rem * 1.5);
  }

  h5 {
    font-size: calc(1rem * 1.25);
  }

  h6 {
    font-size: calc(1rem);
  }
`;

export default GlobalStyles;
