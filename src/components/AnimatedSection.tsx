import { ReactNode, memo, forwardRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

type AnimationType = 
  | 'fadeUp' 
  | 'fadeDown' 
  | 'fadeLeft' 
  | 'fadeRight' 
  | 'scale' 
  | 'rotate'
  | 'slideUp'
  | 'blur';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const animations: Record<AnimationType, { initial: string; animate: string }> = {
  fadeUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  scale: {
    initial: 'opacity-0 scale-90',
    animate: 'opacity-100 scale-100',
  },
  rotate: {
    initial: 'opacity-0 rotate-6 scale-95',
    animate: 'opacity-100 rotate-0 scale-100',
  },
  slideUp: {
    initial: 'opacity-0 translate-y-16',
    animate: 'opacity-100 translate-y-0',
  },
  blur: {
    initial: 'opacity-0 blur-sm scale-105',
    animate: 'opacity-100 blur-0 scale-100',
  },
};

const AnimatedSection = memo(({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold,
    freezeOnceVisible: once,
  });

  const { initial, animate } = animations[animation];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all will-change-transform',
        isVisible ? animate : initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
