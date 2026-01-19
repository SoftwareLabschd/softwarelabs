import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  blurDataURL?: string;
  aspectRatio?: string;
  priority?: boolean;
}

const LazyImage = ({
  src,
  alt,
  placeholder = '/placeholder.svg',
  blurDataURL,
  aspectRatio = '16/9',
  priority = false,
  className,
  ...props
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(priority ? src : placeholder);
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
    freezeOnceVisible: true,
  });

  useEffect(() => {
    if ((isVisible || priority) && !isLoaded && !error) {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setCurrentSrc(src);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setError(true);
        setCurrentSrc(placeholder);
      };
    }
  }, [isVisible, priority, src, isLoaded, error, placeholder]);

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden bg-secondary/30',
        className
      )}
      style={{ aspectRatio }}
    >
      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 blur-lg"
          aria-hidden="true"
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-secondary/30 via-secondary/50 to-secondary/30 bg-[length:200%_100%]" />
      )}

      {/* Main image */}
      <img
        src={currentSrc}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-all duration-500',
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => {
          if (currentSrc === src) setIsLoaded(true);
        }}
        onError={() => setError(true)}
        {...props}
      />

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/50">
          <i className="fa-solid fa-image-slash text-2xl text-muted-foreground"></i>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
