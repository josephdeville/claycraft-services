import { useEffect, useRef, useState } from 'react';

interface ProgressBarProps {
  percentage: number;
  label: string;
  color?: string;
  duration?: number;
}

const ProgressBar = ({ percentage, label, color = "bg-orange-500", duration = 2000 }: ProgressBarProps) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          let startTime: number;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setCurrentPercentage(Math.floor(easeOutCubic * percentage));
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [percentage, duration, isVisible]);

  return (
    <div ref={elementRef} className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-sm font-bold text-orange-500">{currentPercentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full transition-all duration-500 ease-out ${color}`}
          style={{ width: `${currentPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;