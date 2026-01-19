import { memo } from 'react';
import { cn } from '@/lib/utils';

interface SkipToContentProps {
  targetId?: string;
  className?: string;
}

const SkipToContent = memo(({ 
  targetId = 'main-content',
  className 
}: SkipToContentProps) => {
  return (
    <a
      href={`#${targetId}`}
      className={cn(
        'sr-only focus:not-sr-only',
        'fixed top-4 left-4 z-[200]',
        'px-4 py-2 rounded-lg',
        'bg-primary text-primary-foreground',
        'font-medium text-sm',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'transition-all duration-200',
        className
      )}
    >
      Skip to main content
    </a>
  );
});

SkipToContent.displayName = 'SkipToContent';

export default SkipToContent;
