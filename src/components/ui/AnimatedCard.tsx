import { useState, useEffect } from 'react';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon?: string;
  image?: string;
  delay?: number;
}

const AnimatedCard = ({ title, description, icon, image, delay = 0 }: AnimatedCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transition-all duration-700 ease-in-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${isHovered ? 'shadow-lg scale-[1.02]' : 'shadow'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: '#fff',
        borderRadius: '8px',
        overflow: 'hidden',
        height: '100%',
        border: '1px solid #e0e0e0',
        transition: 'all 0.3s ease'
      }}
    >
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon && <span className="text-blue-600 mr-3 text-xl">{icon}</span>}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AnimatedCard;
