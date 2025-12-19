import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-all duration-500 ${
        isExiting ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
      }`}
    >
      {/* Animated Logo/Brand */}
      <div className="relative mb-12">
        {/* Outer ring */}
        <div className="w-32 h-32 rounded-full border-2 border-primary/20 animate-spin" style={{ animationDuration: '3s' }} />
        
        {/* Middle ring */}
        <div 
          className="absolute inset-2 rounded-full border-2 border-primary/40 animate-spin" 
          style={{ animationDuration: '2s', animationDirection: 'reverse' }} 
        />
        
        {/* Inner glowing core */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-cyber-purple flex items-center justify-center animate-pulse">
          <div className="w-16 h-16 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl font-bold text-background font-orbitron">N</span>
          </div>
        </div>

        {/* Orbiting particles */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '4s' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
        </div>
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyber-purple shadow-[0_0_10px_hsl(var(--cyber-purple))]" />
        </div>
      </div>

      {/* Brand name with typing effect */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron">
        <span className="text-primary animate-pulse">NOVA</span>
        <span className="text-foreground">TECH</span>
      </h1>

      {/* Progress bar */}
      <div className="w-64 h-1 bg-secondary rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-gradient-to-r from-primary via-cyber-purple to-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading text */}
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <span>Initializing</span>
        <span className="inline-flex">
          <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
        </span>
        <span className="text-primary font-mono">{Math.min(Math.round(progress), 100)}%</span>
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating particles */}
        <div className="absolute w-3 h-3 rounded-full bg-primary/30 animate-float-enhanced top-1/4 left-1/4" />
        <div className="absolute w-2 h-2 rounded-full bg-cyber-purple/30 animate-float-enhanced top-3/4 right-1/4" style={{ animationDelay: '1s' }} />
        <div className="absolute w-4 h-4 rounded-full bg-neural-blue/30 animate-float-enhanced bottom-1/3 left-1/3" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Preloader;