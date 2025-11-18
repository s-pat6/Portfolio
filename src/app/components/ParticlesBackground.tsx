'use client';

import React, { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

function getParticlesOptions(isDark: boolean) {
  const colors = isDark
    ? ['#a78bfa', '#60a5fa', '#f472b6', '#c084fc']
    : ['#7c3aed', '#3b82f6', '#ec4899', '#a855f7'];
  const linkColor = isDark ? '#a78bfa' : '#7c3aed';

  return {
    fpsLimit: 30,
    particles: {
      number: { value: 120, density: { enable: true, valueArea: 800 } },
      color: { value: colors },
      shape: { type: 'circle' },
      size: { value: 3, random: true },
      lineLinked: { enable: true, distance: 150, color: linkColor, opacity: 0.5, width: 1 },
      links: { enable: true, distance: 150, color: linkColor, opacity: 0.5, width: 1 },
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
}

function ParticlesBackgroundComponent() {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const particlesOptions = getParticlesOptions(isDark);

  useEffect(() => {
    // Check if dark mode is enabled
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    // Delay initialization to not block initial render
    const timer = setTimeout(() => {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
        setInit(true);
      });
    }, 100);

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      setIsDark(isDarkNow);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
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
        backgroundColor: isDark ? 'transparent' : 'white',
        backgroundImage: isDark ? 'linear-gradient(to bottom right, rgb(3, 7, 18), rgb(0, 0, 0), rgb(24, 23, 37))' : 'none',
      }}
    >
      {init && (
        <Particles
          key={isDark ? 'dark' : 'light'}
          id="tsparticles"
          options={particlesOptions}
        />
      )}
    </div>
  );
}

const ParticlesBackground = React.memo(ParticlesBackgroundComponent);

export default ParticlesBackground;
