import React from 'react';
import { Award, Users, Clock, MapPin, ArrowUpRight } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Award,
      number: '100%',
      label: 'Conformidade',
      description: 'Atendimento às normas regulamentadoras'
    },
    {
      icon: Users,
      number: 'Mult.',
      label: 'Equipe Multidisciplinar',
      description: 'Profissionais qualificados e comprometidos'
    },
    {
      icon: Clock,
      number: 'Ágil',
      label: 'Atendimento',
      description: 'Suporte técnico especializado'
    },
    {
      icon: MapPin,
      number: 'VCA',
      label: 'Vitória da Conquista',
      description: 'Atendimento na região'
    }
  ];

  const differentials = [
    'Equipe multidisciplinar qualificada',
    'Atendimento personalizado',
    'Equipamentos de medição calibrados',
    'Conformidade com normas regulamentadoras',
    'Suporte técnico especializado',
    'Soluções integradas e personalizadas'
  ];

  return (
    <section id="sobre" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
            <span className="text-xs font-mono text-slate-400 tracking-[0.3em] uppercase">Quem Somos</span>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 text-center tracking-tight mb-6">
            Sobre a AMJ
          </h2>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto font-light">
            Especializada em Segurança do Trabalho, Medicina Ocupacional e Meio Ambiente
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-24">
          {/* Text Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="relative pl-8 border-l-2 border-slate-300">
              <p className="text-xl text-slate-700 font-light leading-relaxed mb-6">
                A AMJ Consultoria é especializada em soluções integradas para Segurança do Trabalho, Medicina
                Ocupacional e Meio Ambiente.
              </p>

              {/* Destaque - Consulta Online */}
              <div className="bg-slate-900 p-6 mb-6 -ml-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-8 bg-white"></div>
                  <h3 className="text-2xl font-medium text-white tracking-tight">
                    Consulta 100% Online
                  </h3>
                </div>
                <p className="text-slate-300 font-light text-sm leading-relaxed pl-4">
                  Atendimento remoto completo, com praticidade e agilidade para sua empresa
                </p>
              </div>

              <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                Localizada em Vitória da Conquista - BA, atendemos empresas de diversos
                segmentos, oferecendo serviços especializados que garantem a conformidade
                com as normas regulamentadoras e a proteção dos colaboradores.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Nossa equipe multidisciplinar é formada por profissionais qualificados,
                comprometidos em oferecer soluções personalizadas e eficazes para cada cliente.
              </p>
            </div>

            {/* Image Feature */}
            <div className="relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Safety Equipment"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm font-light">
                  Equipamentos calibrados e equipe técnica especializada
                </p>
              </div>
            </div>

            {/* Differentials List */}
            <div className="bg-white p-8 border-l-4 border-slate-900">
              <h3 className="text-2xl font-light text-slate-900 mb-6 tracking-tight">
                Nossos Diferenciais
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {differentials.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 font-light text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats - 2 columns */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative bg-white p-6 border-l-2 border-slate-200 hover:border-slate-900 transition-all duration-500 group"
              >
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <stat.icon className="w-12 h-12 text-slate-900" />
                </div>
                <div className="relative">
                  <div className="text-3xl font-light text-slate-900 mb-2 font-mono">
                    {stat.number}
                  </div>
                  <h4 className="text-sm font-medium text-slate-900 mb-2 uppercase tracking-wide">
                    {stat.label}
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="relative bg-slate-900 p-12 overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px bg-slate-700 flex-1"></div>
                  <span className="text-xs font-mono text-slate-400 tracking-[0.3em] uppercase">Localização</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                  Vitória da Conquista
                </h3>
                <p className="text-slate-400 font-light mb-2">
                  Rua Nelson Rodrigues 195A - Zabele
                </p>
                <p className="text-slate-400 font-light mb-4">
                  Vitória da Conquista - BA - CEP: 45079-160
                </p>
                <p className="text-slate-500 text-sm font-light">
                  Atendemos toda a região com excelência e agilidade
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-2 border-slate-700 group-hover:rotate-45 transition-transform duration-1000"></div>
                  <div className="absolute inset-4 border border-slate-600 group-hover:-rotate-45 transition-transform duration-1000"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
