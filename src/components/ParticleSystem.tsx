import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  shape: 'triangle' | 'square' | 'hexagon' | 'circle';
  color: string;
  opacity: number;
  originalX: number;
  originalY: number;
}

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(25, Math.floor(window.innerWidth / 60));
      
      const shapes: Array<'triangle' | 'square' | 'hexagon' | 'circle'> = ['triangle', 'square', 'hexagon', 'circle'];
      const colors = ['#00ffff', '#ff0080', '#00ff00', '#ff6b00', '#8b5cf6'];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        
        particles.push({
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 20 + 10,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.2 + 0.05
        });
      }
      
      return particles;
    };

    const drawShape = (ctx: CanvasRenderingContext2D, particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      ctx.globalAlpha = particle.opacity;
      ctx.strokeStyle = particle.color;
      ctx.lineWidth = 2;
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 10;

      const size = particle.size;

      switch (particle.shape) {
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -size / 2);
          ctx.lineTo(-size / 2, size / 2);
          ctx.lineTo(size / 2, size / 2);
          ctx.closePath();
          ctx.stroke();
          break;
        
        case 'square':
          ctx.strokeRect(-size / 2, -size / 2, size, size);
          break;
        
        case 'hexagon':
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            const x = Math.cos(angle) * size / 2;
            const y = Math.sin(angle) * size / 2;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
          break;
        
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
          ctx.stroke();
          break;
      }

      ctx.restore();
    };

    const updateParticles = () => {
      const mouse = mouseRef.current;
      
      particlesRef.current.forEach(particle => {
        // Mouse interaction
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.x -= Math.cos(angle) * force * 3;
          particle.y -= Math.sin(angle) * force * 3;
        } else {
          // Return to original position gradually
          particle.x += (particle.originalX - particle.x) * 0.02;
          particle.y += (particle.originalY - particle.y) * 0.02;
        }

        // Natural floating movement
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Boundary wrapping
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        // Update original position for smooth return
        particle.originalX += particle.vx;
        particle.originalY += particle.vy;
        
        if (particle.originalX < -50) particle.originalX = canvas.width + 50;
        if (particle.originalX > canvas.width + 50) particle.originalX = -50;
        if (particle.originalY < -50) particle.originalY = canvas.height + 50;
        if (particle.originalY > canvas.height + 50) particle.originalY = -50;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateParticles();
      particlesRef.current.forEach(particle => drawShape(ctx, particle));
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      resizeCanvas();
      particlesRef.current = createParticles();
    };

    // Initialize
    resizeCanvas();
    particlesRef.current = createParticles();
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
};

export default ParticleSystem;