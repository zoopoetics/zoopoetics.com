import React from 'react';
import Particles from 'react-particles-js';

export default React.memo(function AnimatedParticles() {
  return (
    <Particles
      height={'100vh'}
      style={{
        position: 'absolute',
      }}
      width={'100vw'}
      params={{
        particles: {
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 6,
          },
          color: {
            value: '#ffffff',
          },
          opacity: {
            anim: {
              enable: false,
            },
            random: true,
            value: 0,
          },
          size: {
            random: false,
            value: 160,
          },
          line_linked: {
            distance: 1000,
            enable: true,
            width: 1,
          },
          move: {
            attract: {
              enable: false,
            },
            bounce: false,
            direction: 'none',
            enable: true,
            out_mode: 'out',
            random: false,
            speed: 1,
            straight: false,
          },
        },
        retina_detect: true,
      }}
    />
  );
});
