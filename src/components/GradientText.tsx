import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  animation?: 'shift' | 'glow' | 'rotate3d' | 'none';
  font?: 'orbitron' | 'rajdhani' | 'poppins' | 'exo' | 'jetbrains';
}

const GradientText = ({ 
  children, 
  className = '', 
  animation = 'shift',
  font = 'orbitron'
}: GradientTextProps) => {
  const fontClasses = {
    orbitron: "font-orbitron",
    rajdhani: "font-rajdhani",
    poppins: "font-poppins",
    exo: "font-exo",
    jetbrains: "font-jetbrains"
  };

  const animationClasses = {
    shift: "animate-gradient-shift",
    glow: "animate-pulse-glow",
    rotate3d: "animate-rotate-3d",
    none: "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
  };

  return (
    <span className={cn(
      fontClasses[font],
      animationClasses[animation],
      className
    )}>
      {children}
    </span>
  );
};

export default GradientText;