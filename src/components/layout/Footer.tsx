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
                <a href="#" className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.115-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M20.52 3.48a11.917 11.917 0 00-17.14 0 11.864 11.864 0 00-3.5 8.45c0 2.11.57 4.17 1.64 5.98L2 22l4.2-1.11a11.884 11.884 0 005.89 1.53h.01a11.916 11.916 0 008.44-3.5 11.917 11.917 0 000-16.44zm-8.59 16.46a9.426 9.426 0 01-4.81-1.31l-.35-.21-3.12.83.83-3.04-.22-.36a9.44 9.44 0 1111.95-4.04 9.387 9.387 0 01-4.13 7.13zm5.17-7.8c-.28-.14-1.64-.81-1.9-.9-.25-.08-.43-.14-.61.14-.18.28-.7.9-.85 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.83-2.01-.22-.52-.44-.45-.61-.46h-.52c-.18 0-.48.07-.73.35-.25.28-.95.93-.95 2.26 0 1.33.97 2.62 1.11 2.8.14.18 1.92 2.94 4.66 4.11.65.28 1.16.45 1.56.58.66.22 1.26.19 1.74.12.53-.08 1.64-.67 1.87-1.32.22-.65.22-1.21.16-1.32-.07-.1-.25-.16-.53-.3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8 text-gray-500">
          &copy; {new Date().getFullYear()} HC Tech. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
