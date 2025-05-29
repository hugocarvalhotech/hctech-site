import { useState, useEffect } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ 
  title, 
  subtitle, 
  backgroundImage,
  ctaText,
  ctaLink
}: HeroSectionProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simular carregamento para animação de entrada
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className="relative w-full h-[500px] overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent"></div>
      
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className={`max-w-2xl transition-all duration-1000 ease-out transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-gray-200 mb-8">{subtitle}</p>
          
          {ctaText && ctaLink && (
            <a 
              href={ctaLink}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
