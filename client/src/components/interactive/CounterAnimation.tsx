import { useEffect, useRef } from 'react';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

const CounterAnimation = ({ target, duration = 2000, className = "", suffix = "" }: CounterAnimationProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuint = 1 - Math.pow(1 - progress, 5);
      const currentValue = Math.floor(easeOutQuint * target);
      
      element.textContent = currentValue.toString();
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        element.textContent = target.toString() + suffix;
      }
    };

    // Start animation when element comes into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(element);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [target, duration, suffix]);

  return <span ref={elementRef} className={className}>0{suffix}</span>;
};

export default CounterAnimation;