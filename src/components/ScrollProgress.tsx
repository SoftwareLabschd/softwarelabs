import { memo } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { cn } from '@/lib/utils';

interface ScrollProgressProps {
  className?: string;
  height?: number;
  showPercentage?: boolean;
  color?: string;
}

const ScrollProgress = memo(({
  className,
  height = 3,
  showPercentage = false,
  color,
}: ScrollProgressProps) => {
  const { progress, isScrolling } = useScrollProgress();

  return (
    <>
      {/* Progress bar */}
      <div
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-opacity duration-300',
          isScrolling ? 'opacity-100' : 'opacity-70',
          className
        )}
        style={{ height }}
      >
        <div className="h-full bg-secondary/30">
          <div
            className="h-full transition-all duration-150 ease-out"
            style={{
              width: `${progress}%`,
              background: color || 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--cyber-purple)))',
              boxShadow: `0 0 10px hsl(var(--primary) / 0.5)`,
            }}
          />
        </div>
      </div>

      {/* Percentage indicator */}
      {showPercentage && progress > 0 && (
        <div
          className={cn(
            'fixed bottom-6 right-6 z-[100] px-3 py-2 rounded-full',
            'bg-background/80 backdrop-blur-sm border border-border',
            'text-sm font-mono text-foreground',
            'transition-all duration-300',
            isScrolling ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        >
          {Math.round(progress)}%
        </div>
      )}
    </>
  );
});

ScrollProgress.displayName = 'ScrollProgress';

export default ScrollProgress;
