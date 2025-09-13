import { useState } from 'react';

const CyberCube = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const cube = document.querySelector('.cube-container');
    if (cube) {
      (cube as HTMLElement).style.transform = 'rotateX(360deg) rotateY(360deg) scale(1.2)';
      setTimeout(() => {
        (cube as HTMLElement).style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      }, 1000);
    }
  };

  return (
    <section className="flex justify-center items-center py-32" style={{ perspective: '1000px' }}>
      <div
        className={`cube-container relative w-48 h-48 cursor-pointer transition-all duration-300 ${
          isHovered ? '[animation-duration:2s]' : ''
        }`}
        style={{
          transformStyle: 'preserve-3d',
          animation: 'rotate-cube 20s infinite linear'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Cube faces */}
        <div 
          className={`absolute w-48 h-48 flex items-center justify-center text-2xl font-bold glass border-2 transition-all duration-300 hover-glow ${
            isHovered 
              ? 'bg-pink-500/10 border-pink-400 text-pink-400 drop-shadow-lg' 
              : 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
          }`}
          style={{ transform: 'rotateY(0deg) translateZ(96px)' }}
        >
          CYBER
        </div>
        <div 
          className={`absolute w-48 h-48 flex items-center justify-center text-2xl font-bold glass border-2 transition-all duration-300 hover-glow ${
            isHovered 
              ? 'bg-pink-500/10 border-pink-400 text-pink-400 drop-shadow-lg' 
              : 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
          }`}
          style={{ transform: 'rotateY(180deg) translateZ(96px)' }}
        >
          NEXUS
        </div>
        <div 
          className={`absolute w-48 h-48 flex items-center justify-center text-2xl font-bold glass border-2 transition-all duration-300 hover-glow ${
            isHovered 
              ? 'bg-pink-500/10 border-pink-400 text-pink-400 drop-shadow-lg' 
              : 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
          }`}
          style={{ transform: 'rotateY(90deg) translateZ(96px)' }}
        >
          3D
        </div>
        <div 
          className={`absolute w-48 h-48 flex items-center justify-center text-2xl font-bold glass border-2 transition-all duration-300 hover-glow ${
            isHovered 
              ? 'bg-pink-500/10 border-pink-400 text-pink-400 drop-shadow-lg' 
              : 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
          }`}
          style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}
        >
          TECH
        </div>
        <div 
          className={`absolute w-48 h-48 flex items-center justify-center text-2xl font-bold glass border-2 transition-all duration-300 hover-glow ${
            isHovered 
              ? 'bg-pink-500/10 border-pink-400 text-pink-400 drop-shadow-lg' 
              : 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
          }`}
          style={{ transform: 'rotateX(90deg) translateZ(96px)' }}
        >
          AI
        </div>
        <div 
          className={`absolute w-48 h-48 flex items-center justify-center text-2xl font-bold glass border-2 transition-all duration-300 hover-glow ${
            isHovered 
              ? 'bg-pink-500/10 border-pink-400 text-pink-400 drop-shadow-lg' 
              : 'bg-cyan-400/10 border-cyan-400 text-cyan-400'
          }`}
          style={{ transform: 'rotateX(-90deg) translateZ(96px)' }}
        >
          VR
        </div>
      </div>
    </section>
  );
};

export default CyberCube;