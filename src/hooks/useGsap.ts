import { useEffect, useRef, RefObject } from "react";

// Declare global GSAP types
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

interface GsapTimeline {
  kill: () => void;
}

interface GsapAnimationOptions {
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scale" | "stagger";
  duration?: number;
  delay?: number;
  ease?: string;
  scrollTrigger?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  staggerAmount?: number;
  once?: boolean;
}

const defaultOptions: GsapAnimationOptions = {
  animation: "fadeInUp",
  duration: 1,
  delay: 0,
  ease: "power3.out",
  scrollTrigger: true,
  start: "top 80%",
  end: "bottom 20%",
  scrub: false,
  markers: false,
  staggerAmount: 0.2,
  once: true,
};

export const useGsap = <T extends HTMLElement>(
  options: GsapAnimationOptions = {}
): RefObject<T> => {
  const ref = useRef<T>(null);
  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.gsap) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    // Register ScrollTrigger plugin
    if (ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Get animation properties based on type
    const getAnimationProps = () => {
      const base = {
        duration: mergedOptions.duration,
        delay: mergedOptions.delay,
        ease: mergedOptions.ease,
      };

      switch (mergedOptions.animation) {
        case "fadeIn":
          return { ...base, opacity: 0 };
        case "fadeInUp":
          return { ...base, opacity: 0, y: 50 };
        case "fadeInDown":
          return { ...base, opacity: 0, y: -50 };
        case "fadeInLeft":
          return { ...base, opacity: 0, x: -50 };
        case "fadeInRight":
          return { ...base, opacity: 0, x: 50 };
        case "scale":
          return { ...base, opacity: 0, scale: 0.8 };
        case "stagger":
          return { ...base, opacity: 0, y: 30 };
        default:
          return { ...base, opacity: 0, y: 50 };
      }
    };

    const animationProps = getAnimationProps();

    // Create animation
    const createAnimation = () => {
      if (mergedOptions.animation === "stagger") {
        const children = element.children;
        if (children.length > 0) {
          gsap.set(children, animationProps);
          return gsap.to(children, {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration: mergedOptions.duration,
            stagger: mergedOptions.staggerAmount,
            ease: mergedOptions.ease,
            scrollTrigger: mergedOptions.scrollTrigger && ScrollTrigger ? {
              trigger: element,
              start: mergedOptions.start,
              end: mergedOptions.end,
              scrub: mergedOptions.scrub,
              markers: mergedOptions.markers,
              once: mergedOptions.once,
            } : undefined,
          });
        }
      }

      gsap.set(element, animationProps);
      return gsap.to(element, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: mergedOptions.duration,
        delay: mergedOptions.delay,
        ease: mergedOptions.ease,
        scrollTrigger: mergedOptions.scrollTrigger && ScrollTrigger ? {
          trigger: element,
          start: mergedOptions.start,
          end: mergedOptions.end,
          scrub: mergedOptions.scrub,
          markers: mergedOptions.markers,
          once: mergedOptions.once,
        } : undefined,
      });
    };

    const animation = createAnimation();

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, []);

  return ref;
};

// Hook for timeline-based animations
export const useGsapTimeline = (options: { scrollTrigger?: boolean; trigger?: RefObject<HTMLElement> } = {}) => {
  const timelineRef = useRef<GsapTimeline | null>(null);

  useEffect(() => {
    if (!window.gsap) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;

    if (ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    timelineRef.current = gsap.timeline({
      scrollTrigger: options.scrollTrigger && options.trigger?.current && ScrollTrigger ? {
        trigger: options.trigger.current,
        start: "top 80%",
        once: true,
      } : undefined,
    });

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  return timelineRef;
};

export default useGsap;
