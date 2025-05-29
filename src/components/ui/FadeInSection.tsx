import { useState, useEffect } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FadeInSection = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getTransformValue = () => {
    switch (direction) {
      case 'up': return isVisible ? 'translateY(0)' : 'translateY(40px)';
      case 'down': return isVisible ? 'translateY(0)' : 'translateY(-40px)';
      case 'left': return isVisible ? 'translateX(0)' : 'translateX(40px)';
      case 'right': return isVisible ? 'translateX(0)' : 'translateX(-40px)';
      default: return isVisible ? 'translateY(0)' : 'translateY(40px)';
    }
  };

  return (
    <div
      className={`transition-all duration-800 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformValue(),
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
