import { useEffect, useState } from 'react';
import FadeInSection from '../components/ui/FadeInSection';
import HeroSection from '../components/ui/HeroSection';
import codeBlueBg from '../assets/images/modernization/code_blue.jpeg';
import matrixCodeImage from '../assets/images/modernization/matrix_code.jpeg';
import datacenterRackImg from '../assets/images/modernization/datacenter_rack.jpeg';
import networkInfrastructureImg from '../assets/images/modernization/network_infrastructure.jpeg';

const ServicosPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const servicosDetalhados = [
    {
      id: 'infraestrutura',
      title: 'Infraestrutura e Serviços',
      description: 'Suportamos e implementamos equipamentos e ferramentas dos principais fabricantes do mercado.',
      icon: '🖥️',
      image: networkInfrastructureImg,
      detalhes: [
        'Diagnóstico completo de infraestrutura',
        'Implementação de servidores e estações de trabalho',
        'Gerenciamento de redes corporativas',
        'Monitoramento proativo com alertas em tempo real',
        'Suporte técnico especializado',
        'Projetos de modernização tecnológica'
      ]
    },
    {
      id: 'redes',
      title: 'Redes e Segurança',
      description: 'Serviços especializados para proteger suas infraestruturas de TI e garantir a confidencialidade de dados.',
      icon: '🔒',
      image: matrixCodeImage,
      detalhes: [
        'Implementação de firewalls e sistemas de proteção',
        'Análise de vulnerabilidades e testes de penetração',
        'Configuração de VPNs seguras',
        'Políticas de segurança e compliance',
        'Proteção contra ameaças avançadas',
        'Backup e recuperação de desastres'
      ]
    },
    {
      id: 'licenciamento',
      title: 'Licenciamento e Compliance',
      description: 'Análise e gestão de licenciamento de software para evitar riscos legais e financeiros.',
      icon: '📝',
      image: codeBlueBg,
      detalhes: [
        'Auditoria de licenças de software',
        'Otimização de custos com licenciamento',
        'Adequação às políticas de compliance',
        'Gestão de contratos com fornecedores',
        'Planejamento de aquisições de software',
        'Consultoria em direitos autorais de TI'
      ]
    },
    {
      id: 'cloud',
      title: 'Serviço Cloud e Datacenter',
      description: 'Gerenciamento de ambientes cloud e datacenter para manter seus negócios sempre em funcionamento.',
      icon: '☁️',
      image: datacenterRackImg,
      detalhes: [
        'Migração para ambientes em nuvem',
        'Gestão de infraestrutura híbrida',
        'Otimização de recursos e custos',
        'Escalabilidade e alta disponibilidade',
        'Monitoramento de performance',
        'Implementação de soluções SaaS, PaaS e IaaS'
      ]
    },
    {
      id: 'servicedesk',
      title: 'Service Desk',
      description: 'Suporte técnico especializado e atendimento ao cliente para resolver problemas de forma eficiente.',
      icon: '🛠️',
      image: codeBlueBg,
      detalhes: [
        'Atendimento remoto e presencial',
        'Resolução de incidentes e problemas',
        'Gestão de chamados e SLAs',
        'Suporte a usuários finais',
        'Manutenção preventiva e corretiva',
        'Documentação técnica e procedimentos'
      ]
    }
  ];

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection
        title="Nossos Serviços"
        subtitle="Soluções completas em tecnologia para impulsionar seu negócio"
        backgroundImage={matrixCodeImage}
      />

      <div className="container mx-auto px-4 py-16">
        <FadeInSection delay={300}>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Conheça Nossas Soluções</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços de TI para atender às necessidades específicas da sua empresa.
            </p>
          </div>
        </FadeInSection>

        {servicosDetalhados.map((servico, index) => (
          <FadeInSection 
            key={servico.id} 
            delay={300 + index * 150} 
            direction={index % 2 === 0 ? 'left' : 'right'}
            className="mb-16"
          >
            <div id={servico.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img 
                    src={servico.image} 
                    alt={servico.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="text-blue-600 mr-3 text-3xl">{servico.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-800">{servico.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{servico.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servico.detalhes.map((detalhe, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span>{detalhe}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="/contato" 
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300 transform hover:scale-105"
                    >
                      Solicitar consultoria
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>

      <FadeInSection delay={900} className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Precisa de uma solução personalizada?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Nossa equipe está pronta para desenvolver soluções sob medida para os desafios específicos do seu negócio.
            </p>
            <a 
              href="/contato" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Fale com um especialista
            </a>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default ServicosPage;
