import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#F5F6F7] text-[#0E0E0E] border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0672CB]">HC Tech</h3>
            <p className="mb-4">
              Soluções completas em TI para empresas de todos os portes, com foco em infraestrutura, 
              segurança, licenciamento, cloud e suporte técnico especializado.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0672CB]">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#0672CB] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-[#0672CB] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#0672CB] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#0672CB] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#0672CB]">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0672CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+55 81 9.9575-7805</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#0672CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:comercial@hugocarvalhotech.com.br" className="hover:text-[#0672CB] transition-colors">
                  comercial@hugocarvalhotech.com.br
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Siga-nos</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/hctechbr/" className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/hugo-carvalho-tech" className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.115-4 0v5.604h-3v-11h3v1.656c1.396-2.586 7-2.777 7 2.476v6.868z" />
                  </svg>
                </a>
                <a 
  href="https://wa.me/5581995757805" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors" 
  aria-label="WhatsApp"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    viewBox="0 0 448 512" 
    fill="currentColor"
  >
    <path d="M380.9 97.1C339-18.5 199.5-28.1 97.1 43.1 43.9 86.1 17.6 151.3 24.5 217c9 86.6 79 161.3 165 181.3l-11.8 43.8c-2.1 7.8 5.2 14.5 12.6 10.7l64.1-32.9c92 18.3 183.3-31.9 220.3-117.6 36.9-85.7 13.2-185.7-64.9-244.2zM240 382c-73.4 0-140.4-47.6-165.3-117.6-11.7-32.3-9.8-68.4 5.2-100 20-42.9 64.3-73.1 114-73.1 73.5 0 140.4 47.6 165.3 117.6 11.7 32.3 9.8 68.4-5.2 100-20 42.9-64.3 73.1-114 73.1zm64.4-93.5c-5.4 8.9-31.3 20.6-43.7 22.7-11.6 1.9-26.2 1.8-45.3-5.6-24.6-9.7-72.5-47.1-84.2-92.7-10.2-39.3 7.6-65.7 20-74.5 12.3-8.6 19.5-9.5 26.3-7.6 6.4 1.8 12 6.4 17.6 13.5 6.1 7.8 14.4 25.6 16.2 29.3 2.3 4.7 4.7 10.1 1.5 15.7-3.4 6.1-6.4 8.7-11.1 14-1.8 2.1-4.3 4.6-6.7 7.4-3 3.6-6.3 7.5-4.2 12.4 2.1 5 9.3 20.1 23.3 32.5 16 14 29.6 18.4 35.2 20.2 5.6 1.7 8.8 1.4 12.1-2.1 3.3-3.5 13.9-16.3 17.6-21.9 3.8-5.8 7.9-4.8 12.3-2.8 3.5 1.5 21.3 10.1 25 11.9 3.7 1.8 6.2 2.7 7.1 4.3.9 1.6.9 9.2-5.1 18.1z" />
  </svg>
</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} HC Tech. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
