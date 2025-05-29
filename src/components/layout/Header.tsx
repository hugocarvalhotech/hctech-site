import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="HC Tech Logo" className="h-16 w-auto mr-3" />
              <div>
                <span className="font-bold text-xl text-[#0672CB]">HC Tech</span>
                <span className="block text-sm text-[#0E0E0E]">Business and Consult IT</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors font-medium">
              Início
            </Link>
            <Link to="/servicos" className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors font-medium">
              Serviços
            </Link>
            <Link to="/sobre" className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors font-medium">
              Sobre Nós
            </Link>
            <Link to="/contato" className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors font-medium">
              Contato
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0E0E0E] focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link 
                to="/servicos" 
                className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                to="/sobre" 
                className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link 
                to="/contato" 
                className="text-[#0E0E0E] hover:text-[#0672CB] transition-colors py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
