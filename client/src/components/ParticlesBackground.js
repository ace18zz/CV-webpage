import React, { useEffect } from 'react';
import 'particles.js';

/* global particlesJS */

const ParticlesBackground = () => {
  useEffect(() => {
    particlesJS('particles', {
      particles: {
        number: { value: 150 },
        size: { value: 2 }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: 'repulse'
          }
        }
      }
    });
  }, []);

  return (
    <div id="particles" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
  );
}

export default ParticlesBackground;
