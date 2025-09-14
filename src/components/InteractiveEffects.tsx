import { useEffect } from 'react';

const InteractiveEffects = () => {
  useEffect(() => {
    // Initialize AOS if available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 1200,
        once: true,
        offset: 100
      });
    }

    // Mouse trail effect
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.95) {
        const trail = document.createElement('div');
        trail.className = 'fixed w-0.5 h-0.5 bg-cyan-400 rounded-full pointer-events-none z-50 shadow-lg shadow-cyan-400/50';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
          trail.style.opacity = '0';
          trail.style.transform = 'scale(0)';
          trail.style.transition = 'all 0.5s ease-out';
          setTimeout(() => trail.remove(), 500);
        }, 100);
      }
    };

    // Click ripple effect
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'fixed w-12 h-12 border-2 border-cyan-400 rounded-full pointer-events-none z-50';
      ripple.style.left = (e.clientX - 24) + 'px';
      ripple.style.top = (e.clientY - 24) + 'px';
      ripple.style.transform = 'scale(0)';
      ripple.style.opacity = '1';
      
      document.body.appendChild(ripple);
      
      setTimeout(() => {
        ripple.style.transform = 'scale(4)';
        ripple.style.opacity = '0';
        ripple.style.transition = 'all 0.6s ease-out';
        setTimeout(() => ripple.remove(), 600);
      }, 10);
    };

    // Floating particles
    const createFloatingParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 2;
      const color = Math.random() > 0.5 ? '#00ffff' : '#ff0080';
      
      particle.className = 'fixed rounded-full pointer-events-none z-10 opacity-60';
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      particle.style.backgroundColor = color;
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.top = window.innerHeight + 'px';
      particle.style.boxShadow = `0 0 10px ${color}`;
      
      document.body.appendChild(particle);
      
      const duration = Math.random() * 10000 + 5000;
      const horizontalMovement = Math.random() * 200 - 100;
      
      particle.animate([
        { transform: 'translateY(0px) translateX(0px)', opacity: 0.6 },
        { transform: `translateY(-${window.innerHeight + 100}px) translateX(${horizontalMovement}px)`, opacity: 0 }
      ], {
        duration: duration,
        easing: 'linear'
      }).onfinish = () => particle.remove();
    };

    // Sparkle effects
    const createSparkle = () => {
      const sparkle = document.createElement('div');
      const color = Math.random() > 0.5 ? '#00ffff' : '#ff0080';
      
      sparkle.className = 'fixed w-1 h-1 rounded-full pointer-events-none z-10';
      sparkle.style.backgroundColor = color;
      sparkle.style.left = Math.random() * window.innerWidth + 'px';
      sparkle.style.top = Math.random() * window.innerHeight + 'px';
      sparkle.style.boxShadow = `0 0 10px ${color}`;
      
      document.body.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.style.opacity = '0';
        sparkle.style.transform = 'scale(2)';
        sparkle.style.transition = 'all 1s ease-out';
        setTimeout(() => sparkle.remove(), 1000);
      }, 100);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    
    // Start intervals with reduced frequency
    const particleInterval = setInterval(createFloatingParticle, 5000);
    const sparkleInterval = setInterval(createSparkle, 4000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      clearInterval(particleInterval);
      clearInterval(sparkleInterval);
    };
  }, []);

  return null;
};

export default InteractiveEffects;