'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: {
      load: (
        id: string,
        path: string,
        callback: () => void
      ) => void;
    };
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    // Load particles.js
    const loadParticles = async () => {
      if (typeof window === 'undefined') return;

      try {
        // Try to use the npm package first
        const particlesModule = await import('particles.js');
        
        // particles.js exports differently, handle both cases
        if (particlesModule && !window.particlesJS) {
          // @ts-ignore - particles.js may not have proper types
          window.particlesJS = particlesModule.default || particlesModule;
        }

        // Initialize particles
        if (window.particlesJS && window.particlesJS.load) {
          window.particlesJS.load('particles-js', '/particles.json', function() {
            console.log('Particles.js config loaded');
          });
        }
      } catch (error) {
        // Fallback to CDN if npm import fails
        console.log('Falling back to CDN for particles.js');
        if (!window.particlesJS) {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
          script.async = true;
          script.onload = () => {
            if (window.particlesJS) {
              window.particlesJS.load('particles-js', '/particles.json', function() {
                console.log('Particles.js config loaded from CDN');
              });
            }
          };
          document.body.appendChild(script);
        } else {
          window.particlesJS.load('particles-js', '/particles.json', function() {
            console.log('Particles.js config loaded');
          });
        }
      }
    };

    loadParticles();

    // Cleanup function
    return () => {
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none'
      }}
    ></div>
  );
};

export default ParticlesBackground;

