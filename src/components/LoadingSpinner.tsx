import { memo } from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'bars';
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

const LoadingSpinner = memo(({
  size = 'md',
  variant = 'default',
  className,
  text,
}: LoadingSpinnerProps) => {
  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={cn(
                  'rounded-full bg-primary',
                  size === 'sm' ? 'w-1.5 h-1.5' : size === 'lg' ? 'w-3 h-3' : 'w-2 h-2'
                )}
                style={{
                  animation: `bounce 1.4s infinite ease-in-out both`,
                  animationDelay: `${i * 0.16}s`,
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <div className={cn('relative', sizeClasses[size])}>
            <div className="absolute inset-0 rounded-full bg-primary opacity-75 animate-ping" />
            <div className="relative rounded-full bg-primary w-full h-full" />
          </div>
        );

      case 'bars':
        return (
          <div className="flex space-x-1 items-end">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  'bg-primary rounded-sm',
                  size === 'sm' ? 'w-1' : size === 'lg' ? 'w-2' : 'w-1.5'
                )}
                style={{
                  height: size === 'sm' ? '12px' : size === 'lg' ? '32px' : '20px',
                  animation: `scaleY 1s infinite ease-in-out`,
                  animationDelay: `${i * 0.1}s`,
                  transformOrigin: 'bottom',
                }}
              />
            ))}
          </div>
        );

      default:
        return (
          <div
            className={cn(
              sizeClasses[size],
              'border-2 border-muted rounded-full',
              'border-t-primary animate-spin'
            )}
          />
        );
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      {renderSpinner()}
      {text && (
        <p className="text-sm text-muted-foreground animate-pulse">{text}</p>
      )}
      
      <style>{`
        @keyframes scaleY {
          0%, 40%, 100% { transform: scaleY(0.4); }
          20% { transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
});

LoadingSpinner.displayName = 'LoadingSpinner';

export default LoadingSpinner;
