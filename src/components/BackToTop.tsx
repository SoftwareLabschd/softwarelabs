import { memo, useCallback } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BackToTopProps {
  threshold?: number;
  className?: string;
}

const BackToTop = memo(({ threshold = 300, className }: BackToTopProps) => {
  const { scrollY } = useScrollProgress();
  const isVisible = scrollY > threshold;

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      variant="outline"
      size="icon"
      className={cn(
        'fixed bottom-6 right-6 z-50 rounded-full',
        'bg-background/80 backdrop-blur-sm border-border',
        'hover:bg-primary hover:text-primary-foreground hover:border-primary',
        'transition-all duration-300 shadow-lg',
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-90 pointer-events-none',
        className
      )}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-chevron-up"></i>
    </Button>
  );
});

BackToTop.displayName = 'BackToTop';

export default BackToTop;
