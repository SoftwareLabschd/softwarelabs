import { useEffect } from 'react';

declare global {
  interface Window {
    AOS: any;
    particlesJS: any;
    Swiper: any;
    bootstrap: any;
  }
}

export const LibraryInitializer = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    const initAOS = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          offset: 100,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
      } else {
        setTimeout(initAOS, 100);
      }
    };

    // Initialize Particles.js background
    const initParticles = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: '#6366f1'
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#6366f1',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              }
            }
          },
          retina_detect: true
        });
      } else {
        setTimeout(initParticles, 100);
      }
    };

    initAOS();
    initParticles();

    // Refresh AOS on route changes
    return () => {
      if (window.AOS) {
        window.AOS.refresh();
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      className="fixed inset-0 pointer-events-none z-[-30]"
      style={{ 
        background: 'transparent'
      }}
    />
  );
};
