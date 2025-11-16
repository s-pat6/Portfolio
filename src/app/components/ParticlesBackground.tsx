'use client';

import React, { useEffect } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

const particlesOptions = {
  fpsLimit: 30,
  particles: {
    number: { value: 120, density: { enable: true, valueArea: 800 } },
    color: { value: ['#a78bfa', '#60a5fa', '#f472b6', '#c084fc'] },
    shape: { type: 'circle' },
    size: { value: 3, random: true },
    lineLinked: { enable: true, distance: 150, color: '#a78bfa', opacity: 0.5, width: 1 },
    links: { enable: true, distance: 150, color: '#a78bfa', opacity: 0.5, width: 1 },
    move: { enable: true, speed: 1, direction: 'none', random: false, straight: false, outMode: 'out', bounce: false, attract: false }
  },
  interactivity: {
    detectOn: 'window',
    events: {
      onHover: { enable: true, mode: ['grab'] },
      onClick: { enable: true, mode: ['push', 'remove'] },
      resize: true
    },
    modes: {
      grab: { distance: 300, lineLinked: { opacity: 0.5 }, links: { opacity: 0.5 } },
      bubble: { distance: 200, size: 20, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particlesNb: 4 },
      remove: { particlesNb: 2 }
    }
  }
};

function ParticlesBackgroundComponent() {
  const [init, setInit] = React.useState(false);

  useEffect(() => {
    // Delay initialization to not block initial render
    const timer = setTimeout(() => {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
        setInit(true);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    >
      {init && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
        />
      )}
    </div>
  );
}

const ParticlesBackground = React.memo(ParticlesBackgroundComponent);

export default ParticlesBackground;

