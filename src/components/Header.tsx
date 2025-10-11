import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#1e3a8a] bg-opacity-95 backdrop-blur-sm shadow-lg' 
        : 'bg-[#1e3a8a]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <img
              src="/logo-amj-new.png"
              alt="AMJ Consultoria"
              className="h-24 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            {['inicio', 'servicos', 'sobre', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-white hover:text-blue-200 transition-colors duration-300 capitalize font-medium"
              >
                {item === 'inicio' ? 'Início' : 
                 item === 'servicos' ? 'Serviços' : 
                 item === 'sobre' ? 'Sobre' :
                 'Contato'}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1e3a8a] bg-opacity-95 backdrop-blur-sm rounded-lg mt-2 p-4">
            {['inicio', 'servicos', 'sobre', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-white hover:text-blue-200 transition-colors duration-300 py-2 capitalize font-medium"
              >
                {item === 'inicio' ? 'Início' : 
                 item === 'servicos' ? 'Serviços' : 
                 item === 'sobre' ? 'Sobre' :
                 'Contato'}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;