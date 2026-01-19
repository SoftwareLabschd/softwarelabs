import { useEffect, useRef, useState, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

interface IntersectionObserverResult {
  ref: RefObject<HTMLDivElement>;
  isVisible: boolean;
  entry: IntersectionObserverEntry | null;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = true,
}: UseIntersectionObserverOptions = {}): IntersectionObserverResult => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const frozen = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || (freezeOnceVisible && frozen.current)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting && freezeOnceVisible) {
          frozen.current = true;
        }
        
        setIsVisible(isIntersecting);
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return { ref, isVisible, entry };
};

export default useIntersectionObserver;
