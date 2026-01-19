import { useState, useEffect, useCallback, RefObject } from 'react';

interface ScrollProgressOptions {
  containerRef?: RefObject<HTMLElement>;
  threshold?: number;
}

interface ScrollProgressResult {
  progress: number;
  isScrolling: boolean;
  scrollDirection: 'up' | 'down' | null;
  scrollY: number;
}

export function useScrollProgress({
  containerRef,
  threshold = 50,
}: ScrollProgressOptions = {}): ScrollProgressResult {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const container = containerRef?.current || document.documentElement;
    const scrollTop = containerRef?.current 
      ? containerRef.current.scrollTop 
      : window.scrollY;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    
    const currentProgress = scrollHeight > 0 
      ? Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100)
      : 0;
    
    setProgress(currentProgress);
    setScrollY(scrollTop);

    // Determine scroll direction
    if (Math.abs(scrollTop - lastScrollY) > threshold / 10) {
      setScrollDirection(scrollTop > lastScrollY ? 'down' : 'up');
      setLastScrollY(scrollTop);
    }

    setIsScrolling(true);
  }, [containerRef, lastScrollY, threshold]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const scrollHandler = () => {
      handleScroll();
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };

    const target = containerRef?.current || window;
    target.addEventListener('scroll', scrollHandler, { passive: true });

    // Initial call
    handleScroll();

    return () => {
      target.removeEventListener('scroll', scrollHandler);
      clearTimeout(scrollTimeout);
    };
  }, [handleScroll, containerRef]);

  return { progress, isScrolling, scrollDirection, scrollY };
}

export default useScrollProgress;
