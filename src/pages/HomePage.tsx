import { useEffect, useState } from 'react';
import HeroSection from '../components/ui/HeroSection';
import AnimatedCard from '../components/ui/AnimatedCard';
import FadeInSection from '../components/ui/FadeInSection';
import matrixCodeImage from '../assets/images/modernization/matrix_code.jpeg';
import codeBlueBg from '../assets/images/modernization/code_blue.jpeg';
import businessMeetingImg from '../assets/images/modernization/business_meeting.jpeg';
import datacenterRackImg from '../assets/images/modernization/datacenter_rack.jpeg';
import networkInfrastructureImg from '../assets/images/modernization/network_infrastructure.jpeg';
import VeeamLogoImg from '../assets/images/modernization/veeam_logo.jpg';
import GrafanaImg from '../assets/images/modernization/grafana.jpeg';
import ZabbixImg from '../assets/images/modernization/zabbix.jpeg';
import PartnerCarousel from '../components/PartnerCarousel';

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "Infraestrutura e Serviços",
      description: "Suportamos e implementamos equipamentos e ferramentas dos principais fabricantes do mercado. Oferecemos soluções robustas e eficientes para a infraestrutura de TI da sua empresa.",
      image: networkInfrastructureImg,
      icon: "🖧"
    },
    {
      title: "Redes e Segurança",
      description: "Serviços especializados em redes e segurança para auxiliar empresas a proteger suas infraestruturas de TI contra ameaças cibernéticas.",
      image: matrixCodeImage,
      icon: "🔒"
    },
    {
      title: "Consultoria Estratégica",
      description: "Oferecemos consultoria estratégica para impulsionar a transformação digital e otimizar processos de negócios com foco em resultados.",
      image: businessMeetingImg,
      icon: "💼"
    }
  ];

  const partners = [
    { img: VeeamLogoImg, name: "Veeam" },
    { img: GrafanaImg, name: "Grafana" },
    { img: ZabbixImg, name: "Zabbix" }
  ];

  const clients = [
    { img: businessMeetingImg, name: "Empresa X" },
    { img: datacenterRackImg, name: "Empresa Y" },
    { img: networkInfrastructureImg, name: "Empresa Z" }
  ];

  return (
    <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection />

      <FadeInSection delay={200} direction="up">
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre a HC Tech</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Somos especialistas em soluções de infraestrutura, redes e segurança, consultoria e suporte técnico, oferecendo excelência e inovação para sua empresa.
          </p>
        </section>
      </FadeInSection>

      <FadeInSection delay={400} direction="up">
        <section className="py-16 bg-gray-100">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {services.map((service, index) => (
              <AnimatedCard key={index} delay={index * 100}>
                <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
                  <img className="w-full h-48 object-cover" src={service.image} alt={service.title} />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{service.icon} {service.title}</div>
                    <p className="text-gray-700 text-base">{service.description}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>
      </FadeInSection>

      <FadeInSection delay={800} direction="up" className="mt-20">
        <PartnerCarousel title="Nossos Parceiros" items={partners} />
      </FadeInSection>

      <FadeInSection delay={900} direction="up">
        <PartnerCarousel title="Nossos Clientes" items={clients} />
      </FadeInSection>

      <FadeInSection delay={1000} direction="up">
        <section className="py-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Entre em Contato</h2>
          <p className="text-center text-gray-600 mb-8">
            Fale com a nossa equipe e descubra como podemos ajudar sua empresa a evoluir com soluções personalizadas.
          </p>
          <div className="text-center">
            <a
              href="/contato"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </FadeInSection>
    </div>
  );
};

export default HomePage;
