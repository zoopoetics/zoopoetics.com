import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import AnimatedGradient from 'components/animated-gradient';
import Splash from 'components/splash';
import GlobalStyles from 'components/styles/global-styles';

WebFont.load({
  active: () => {
    ReactDOM.render(
      <React.Fragment>
        <GlobalStyles />
        <AnimatedGradient />
        <Splash />
      </React.Fragment>,
      document.getElementById('root'),
    );
  },
  google: {
    families: ['Lato'],
  },
});
