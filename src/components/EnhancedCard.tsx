import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EnhancedCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'gradient';
  animation?: 'shimmer' | 'glow' | 'float' | 'none';
}

const EnhancedCard = ({ 
  children, 
  className = '', 
  variant = 'glass', 
  animation = 'shimmer' 
}: EnhancedCardProps) => {
  const baseClasses = "rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl";
  
  const variantClasses = {
    glass: "glass-card",
    solid: "bg-card border border-border",
    gradient: "bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
  };

  const animationClasses = {
    shimmer: "animate-shimmer",
    glow: "hover:animate-pulse-glow",
    float: "animate-float-up",
    none: ""
  };

  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      animationClasses[animation],
      className
    )}>
      {children}
    </div>
  );
};

export default EnhancedCard;