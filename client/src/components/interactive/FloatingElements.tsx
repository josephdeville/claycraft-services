import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Orange Circles */}
      <div 
        className="absolute w-4 h-4 bg-orange-500/20 rounded-full animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          top: '20%',
          left: '10%',
        }}
      />
      <div 
        className="absolute w-6 h-6 bg-orange-500/10 rounded-full animate-bounce"
        style={{
          transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
          top: '60%',
          right: '15%',
          animationDelay: '0.5s',
        }}
      />
      <div 
        className="absolute w-3 h-3 bg-orange-500/30 rounded-full animate-ping"
        style={{
          transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
          bottom: '30%',
          left: '20%',
          animationDelay: '1s',
        }}
      />
      
      {/* Gradient Blobs */}
      <div 
        className="absolute w-32 h-32 bg-gradient-to-r from-orange-500/5 to-transparent rounded-full blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          top: '10%',
          right: '25%',
        }}
      />
      <div 
        className="absolute w-24 h-24 bg-gradient-to-l from-orange-500/5 to-transparent rounded-full blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          bottom: '20%',
          right: '10%',
          animationDelay: '2s',
        }}
      />
    </div>
  );
};

export default FloatingElements;