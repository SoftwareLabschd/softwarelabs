import { useEffect, useRef } from 'react';

const InteractivePlanet = () => {
  const planetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const planet = planetRef.current;
    if (!planet) return;

    // Add sparkle animation CSS
    const style = document.createElement('style');
    style.textContent = `
      @keyframes sparkle {
        0% { 
          opacity: 1; 
          transform: scale(1); 
        }
        100% { 
          opacity: 0; 
          transform: scale(0) rotate(180deg); 
        }
      }
    `;
    document.head.appendChild(style);

    const createSparkle = (element: HTMLElement) => {
      for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'absolute w-1 h-1 bg-white rounded-full pointer-events-none';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkle 0.8s ease-out forwards';
        
        element.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 800);
      }
    };

    const handleClick = () => {
      if (planet) {
        createSparkle(planet);
      }
    };

    planet.addEventListener('click', handleClick);

    return () => {
      planet.removeEventListener('click', handleClick);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex justify-center items-center py-20">
      <div
        ref={planetRef}
        className="relative w-72 h-72 rounded-full cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-180 group"
        style={{
          background: 'radial-gradient(circle at 30% 30%, hsl(var(--tech-pink)), hsl(var(--cyber-purple)), hsl(var(--tech-green)))',
          boxShadow: '0 0 50px hsla(var(--tech-green) / 0.5)'
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute inset-4 rounded-full border border-white/20" />
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80 group-hover:text-white transition-colors duration-300"
        >
          <i className="fas fa-globe text-4xl"></i>
        </div>
      </div>
    </div>
  );
};

export default InteractivePlanet;