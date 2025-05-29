import { useEffect, useState } from 'react';
import FadeInSection from '../components/ui/FadeInSection';
import HeroSection from '../components/ui/HeroSection';
import businessMeetingImg from '../assets/images/modernization/business_meeting.jpeg';
import officeTechImg from '../assets/images/modernization/office_tech.jpeg';

const SobrePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection
        title="Sobre a HC Tech"
        subtitle="Excelência em soluções de TI para empresas de todos os portes"
        backgroundImage={officeTechImg}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <FadeInSection delay={300} direction="right" className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
            <p className="text-lg text-gray-600 mb-4">
              Na HC Tech, nossa missão é fornecer soluções tecnológicas inovadoras e confiáveis que impulsionem o crescimento e a eficiência dos nossos clientes.
            </p>
            <p className="text-lg text-gray-600">
              Buscamos constantemente a excelência em nossos serviços, combinando expertise técnica com um profundo entendimento das necessidades específicas de cada negócio.
            </p>
          </FadeInSection>
          
          <FadeInSection delay={500} direction="left" className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={businessMeetingImg} 
                alt="Equipe HC Tech" 
                className="w-full h-auto"
              />
            </div>
          </FadeInSection>
        </div>

        <FadeInSection delay={700} className="mb-16">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Nossos Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-3">🔍</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Transparência</h4>
                <p className="text-gray-600">
                  Mantemos comunicação clara e honesta com nossos clientes em todos os momentos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-3">🚀</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Inovação</h4>
                <p className="text-gray-600">
                  Buscamos constantemente as melhores e mais atuais soluções tecnológicas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 text-3xl mb-3">🤝</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Compromisso</h4>
                <p className="text-gray-600">
                  Dedicamos total atenção às necessidades dos nossos clientes, garantindo resultados.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={900} direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Expertise</h2>
            <p className="text-lg text-gray-600 mb-8">
              Com anos de experiência no mercado de TI, nossa equipe de profissionais altamente qualificados está preparada para enfrentar os desafios tecnológicos mais complexos e oferecer soluções personalizadas que realmente fazem a diferença para o seu negócio.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray-100 py-2 px-4 rounded-full text-gray-700">Infraestrutura de TI</div>
              <div className="bg-gray-100 py-2 px-4 rounded-full text-gray-700">Segurança da Informação</div>
              <div className="bg-gray-100 py-2 px-4 rounded-full text-gray-700">Cloud Computing</div>
              <div className="bg-gray-100 py-2 px-4 rounded-full text-gray-700">Gestão de Serviços</div>
              <div className="bg-gray-100 py-2 px-4 rounded-full text-gray-700">Compliance</div>
              <div className="bg-gray-100 py-2 px-4 rounded-full text-gray-700">Consultoria Estratégica</div>
            </div>
          </div>
        </FadeInSection>
      </div>

      <FadeInSection delay={1100} className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua TI?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Descubra como podemos ajudar sua empresa a alcançar todo o seu potencial tecnológico.
            </p>
            <a 
              href="/contato" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Entre em contato
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default SobrePage;
