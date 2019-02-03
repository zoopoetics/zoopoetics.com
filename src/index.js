import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import AnimatedGradient from 'components/animated-gradient';
import AnimatedParticles from 'components/animated-particles';
import Splash from 'components/splash';
import GlobalStyles from 'components/styles/global-styles';

WebFont.load({
  active: () => {
    ReactDOM.render(
      <React.Fragment>
        <GlobalStyles />
        <AnimatedGradient />
        <AnimatedParticles />
        <Splash />
      </React.Fragment>,
      document.getElementById('root'),
    );
  },
  google: {
    families: ['Roboto Mono'],
  },
});
