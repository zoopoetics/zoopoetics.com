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
              enable: false,
              value_area: 1000,
            },
            value: 6,
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            polygon: {
              nb_sides: 6,
            },
            stroke: {
              width: 0,
            },
            type: 'polygon',
          },
          opacity: {
            anim: {
              enable: false,
              opacity_min: 0.1,
              speed: 1,
              sync: false,
            },
            random: true,
            value: 0.1,
          },
          size: {
            anim: {
              enable: true,
              speed: 1,
              size_min: 40,
              sync: false,
            },
            random: false,
            value: 160,
          },
          line_linked: {
            enable: false,
          },
          move: {
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
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
