import React from 'react';
import { ArrowRight, MapPin, Shield, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Safety at work"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900"></div>
      </div>

      {/* Geometric elements */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-slate-700 opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 border-2 border-slate-700 opacity-10"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/80 backdrop-blur-sm border border-slate-600 px-5 py-2.5 mb-8 rounded-md">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-white tracking-wide">
                Vitória da Conquista - BA
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
              Segurança,<br />
              <span className="text-slate-400">Saúde e</span><br />
              Sustentabilidade
            </h1>

            <p className="text-xl text-slate-400 font-light leading-relaxed mb-8 max-w-xl">
              Soluções integradas em Segurança do Trabalho, Medicina Ocupacional
              e Meio Ambiente para sua empresa
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('servicos')}
                className="group relative overflow-hidden bg-white text-slate-900 px-8 py-4 transition-all duration-500 hover:pr-12"
              >
                <span className="relative z-10 text-sm font-mono tracking-wider uppercase flex items-center gap-2">
                  Nossos Serviços
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('contato')}
                className="group relative overflow-hidden bg-transparent border-2 border-slate-700 text-white px-8 py-4 hover:border-white transition-all duration-500"
              >
                <span className="relative z-10 text-sm font-mono tracking-wider uppercase">
                  Solicitar Orçamento
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl">
              <div className="border-l-2 border-slate-700 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-slate-400" />
                  <span className="text-2xl font-light text-white font-mono">100%</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Conformidade NRs</p>
              </div>
              <div className="border-l-2 border-slate-700 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-slate-400" />
                  <span className="text-2xl font-light text-white font-mono">Multi</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Equipe Especializada</p>
              </div>
              <div className="border-l-2 border-slate-700 pl-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-slate-400" />
                  <span className="text-2xl font-light text-white font-mono">100%</span>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wide">Consulta Online</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Feature */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Workplace Safety"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-slate-800/90 backdrop-blur-sm border border-slate-700 p-6">
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  Especialistas em programas de prevenção, laudos técnicos e
                  licenciamento ambiental para garantir a segurança e conformidade
                  da sua empresa
                </p>
              </div>

              {/* Decorative border */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-slate-700 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
