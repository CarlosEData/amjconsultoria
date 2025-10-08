import React from 'react';
import { Shield } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/logo-amj-new.png"
                alt="AMJ Consultoria"
                className="h-21 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Soluções completas e integradas em 
              Segurança do Trabalho, Medicina Ocupacional e Meio Ambiente.
            </p>
            <p className="text-gray-400 text-sm">
              Rua Nelson Rodrigues 195A - Zabele<br />
              Vitória da Conquista - BA - CEP: 45079-160
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Início', id: 'inicio' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Contato', id: 'contato' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">PGR e PCMSO</li>
              <li className="text-gray-400">Laudos Técnicos</li>
              <li className="text-gray-400">Licenciamento Ambiental</li>
              <li className="text-gray-400">Treinamentos NRs</li>
              <li className="text-gray-400">Linhas de Vida</li>
              <li className="text-gray-400">Consultoria Especializada</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 AMJ Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Desenvolvido com ❤️ para sua segurança
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;