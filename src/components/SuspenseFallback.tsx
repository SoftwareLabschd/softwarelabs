import { memo } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { cn } from '@/lib/utils';

interface SuspenseFallbackProps {
  className?: string;
  fullScreen?: boolean;
  message?: string;
}

const SuspenseFallback = memo(({
  className,
  fullScreen = false,
  message = 'Loading...',
}: SuspenseFallbackProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center',
        fullScreen ? 'min-h-screen' : 'min-h-[200px]',
        'bg-background/50 backdrop-blur-sm',
        className
      )}
    >
      <div className="text-center space-y-4">
        <div className="relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
          
          {/* Main spinner container */}
          <div className="relative w-16 h-16 mx-auto">
            {/* Rotating ring */}
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
            <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin" />
            
            {/* Center icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fa-solid fa-code text-primary animate-pulse"></i>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm animate-pulse">
          {message}
        </p>
      </div>
    </div>
  );
});

SuspenseFallback.displayName = 'SuspenseFallback';

export default SuspenseFallback;
