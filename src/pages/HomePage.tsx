import { useEffect, useState } from 'react';
import HeroSection from '../components/ui/HeroSection';
import AnimatedCard from '../components/ui/AnimatedCard';
import FadeInSection from '../components/ui/FadeInSection';
import matrixCodeImage from '../assets/images/modernization/matrix_code.jpeg';
import codeBlueBg from '../assets/images/modernization/code_blue.jpeg';
import businessMeetingImg from '../assets/images/modernization/business_meeting.jpeg';
import datacenterRackImg from '../assets/images/modernization/datacenter_rack.jpeg';
import networkInfrastructureImg from '../assets/images/modernization/network_infrastructure.jpeg';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "Infraestrutura e Serviços",
      description: "Suportamos e implementamos equipamentos e ferramentas dos principais fabricantes do mercado. Oferecemos diagnóstico completo, serviços gerenciados, projetos, consultoria e monitoramento de eventos com envio de alertas.",
      image: networkInfrastructureImg,
      icon: "🖥️"
    },
    {
      title: "Redes e Segurança",
      description: "Serviços especializados em redes e segurança para auxiliar empresas a proteger suas infraestruturas de TI e garantir a confidencialidade, integridade e disponibilidade de seus dados e sistemas.",
      image: matrixCodeImage,
      icon: "🔒"
    },
    {
      title: "Licenciamento e Compliance",
      description: "Grande parte das empresas não possui um processo refinado de controle ou até não conhece as regras de licenciamento de softwares dos principais fabricantes como Microsoft, isso pode acarretar em multa, analisamos para você.",
      image: businessMeetingImg,
      icon: "📝"
    },
    {
      title: "Serviço Cloud e Datacenter",
      description: "O correto gerenciamento dos ambientes de datacenter e cloud computing é de suma importância para manter os negócios da sua empresa sempre em funcionamento.",
      image: datacenterRackImg,
      icon: "☁️"
    },
    {
      title: "Zabbix",
      description: "Implementação e gerenciamento de soluções de monitoramento Zabbix para acompanhamento em tempo real da sua infraestrutura, com alertas personalizados e dashboards informativos.",
      image: codeBlueBg,
      icon: "📊"
    },
    {
      title: "Grafana",
      description: "Visualização de dados e métricas através de dashboards interativos e personalizados, permitindo análises detalhadas e tomadas de decisão baseadas em dados.",
      image: matrixCodeImage,
      icon: "📈"
    },
    {
      title: "Veeam Backup",
      description: "Soluções completas de backup e recuperação de desastres com Veeam, garantindo a segurança dos seus dados e rápida recuperação em caso de incidentes.",
      image: businessMeetingImg,
      icon: "🔄"
    }
  ];

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection
        title="Soluções de TI para o seu negócio"
        subtitle="Infraestrutura, segurança e consultoria especializada para empresas de todos os portes"
        backgroundImage={codeBlueBg}
        ctaText="Conheça nossos serviços"
        ctaLink="/servicos"
      />

      <div className="container mx-auto px-4 py-16">
        <FadeInSection delay={300}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em tecnologia para que sua empresa possa focar no que realmente importa: seu negócio.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              delay={300 + index * 150}
            />
          ))}
        </div>

        <FadeInSection delay={900} direction="up" className="mt-20">
          <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Service Desk</h3>
                <p className="text-gray-700">
                  Nossa oferta de Service Desk é um serviço abrangente que fornece suporte técnico especializado e atendimento ao cliente para resolver de forma eficiente e rápida os problemas, remotamente ou presencial.
                </p>
                <a href="/contato" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105">
                  Entre em contato
                </a>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl shadow-lg">
                  🛠️
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      <FadeInSection delay={1200} className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Pronto para transformar sua infraestrutura de TI?</h2>
              <p className="text-xl text-gray-300">
                Entre em contato conosco hoje mesmo para uma consultoria personalizada.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contato</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-semibold">Telefone:</span> +55 81 9.9575-7805
                </p>
                <p className="text-gray-600 mb-4">
                  <span className="font-semibold">Email:</span> comercial@hugocarvalhotech.com.br
                </p>
                <a href="/contato" className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-4 rounded-md transition-all duration-300">
                  Enviar mensagem
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default HomePage;
