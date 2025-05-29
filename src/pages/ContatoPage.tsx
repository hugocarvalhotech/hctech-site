import { useState, useEffect } from 'react';
import FadeInSection from '../components/ui/FadeInSection';
import HeroSection from '../components/ui/HeroSection';
import codeBlueBg from '../assets/images/modernization/code_blue.jpeg';

const ContatoPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de envio do formulário
    setTimeout(() => {
      setEnviado(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        mensagem: ''
      });
    }, 1000);
  };

  return (
    <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <HeroSection
        title="Entre em Contato"
        subtitle="Estamos prontos para ajudar sua empresa a alcançar o próximo nível tecnológico"
        backgroundImage={codeBlueBg}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row">
          <FadeInSection delay={300} direction="right" className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Fale Conosco</h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos à disposição para esclarecer suas dúvidas, fornecer informações sobre nossos serviços ou agendar uma consultoria personalizada para sua empresa.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Informações de Contato</h3>
              
              <div className="flex items-start mb-4">
                <div className="text-blue-600 text-xl mr-4">📱</div>
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-gray-600">+55 81 9.8126-5903</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <div className="text-blue-600 text-xl mr-4">✉️</div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">comercial@hugocarvalhotech.com.br</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-blue-600 text-xl mr-4">🕒</div>
                <div>
                  <p className="font-medium">Horário de Atendimento</p>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Atendimento Emergencial</h3>
              <p className="text-gray-700 mb-4">
                Para casos de emergência técnica, disponibilizamos suporte prioritário para clientes com contrato ativo.
              </p>
              <div className="flex items-center">
                <div className="text-blue-600 text-xl mr-2">🔔</div>
                <p className="font-medium">Suporte 24/7: +55 81 9.8126-5903</p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={500} direction="left" className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h3>
              
              {enviado ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-green-500 text-5xl mb-4">✓</div>
                  <h4 className="text-xl font-semibold text-green-700 mb-2">Mensagem Enviada!</h4>
                  <p className="text-gray-600 mb-4">
                    Agradecemos seu contato. Nossa equipe responderá em breve.
                  </p>
                  <button 
                    onClick={() => setEnviado(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-300"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-gray-700 font-medium mb-2">Empresa</label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
