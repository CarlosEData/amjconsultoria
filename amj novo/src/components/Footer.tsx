import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img
                src="/logo-amj-new.png"
                alt="AMJ Consultoria"
                className="h-20 w-auto"
              />
            </div>
            <p className="text-slate-400 font-light leading-relaxed mb-6 max-w-md">
              Soluções completas e integradas em Segurança do Trabalho,
              Medicina Ocupacional e Meio Ambiente.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                <p className="text-slate-400 text-sm font-light">
                  Rua Nelson Rodrigues 195A - Zabele<br />
                  Vitória da Conquista - BA<br />
                  CEP: 45079-160
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href="tel:+5577991244959" className="text-slate-400 text-sm font-light hover:text-white transition-colors">
                  +55 77 99124-4959
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href="mailto:jefferson.rammos.pereiraa@gmail.com" className="text-slate-400 text-sm font-light hover:text-white transition-colors break-all">
                  jefferson.rammos.pereiraa@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                <p className="text-slate-400 text-sm font-light">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 12h
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Início', id: 'inicio' },
                { name: 'Serviços', id: 'servicos' },
                { name: 'Sobre', id: 'sobre' },
                { name: 'Contato', id: 'contato' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-white transition-colors duration-300 text-sm font-light"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">
              Principais Serviços
            </h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm font-light">PGR e PCMSO</li>
              <li className="text-slate-400 text-sm font-light">Laudos Técnicos</li>
              <li className="text-slate-400 text-sm font-light">Licenciamento Ambiental</li>
              <li className="text-slate-400 text-sm font-light">Treinamentos NRs</li>
              <li className="text-slate-400 text-sm font-light">Linhas de Vida</li>
              <li className="text-slate-400 text-sm font-light">Consultoria Especializada</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm font-light">
              © 2025 AMJ Consultoria. Todos os direitos reservados.
            </p>
            <p className="text-slate-500 text-sm font-light">
              Excelência em Segurança do Trabalho
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
