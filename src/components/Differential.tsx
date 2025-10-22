import React from 'react';
import { Award, Settings, Users, BookOpen, Star, FileCheck, Shield, Wrench, ClipboardCheck } from 'lucide-react';

const Differential = () => {
  const differentials = [
    {
      icon: Award,
      title: 'Conformidade com Normas Regulamentadoras',
      description: 'Atendimento rigoroso às exigências das NRs e legislação vigente'
    },
    {
      icon: Settings,
      title: 'Gestão Completa do eSocial',
      description: 'Automatização e gerenciamento completo de todas as obrigações do eSocial'
    },
    {
      icon: Users,
      title: 'Equipe Qualificada com Especialistas',
      description: 'Profissionais experientes e certificados nas mais diversas áreas de SST'
    },
    {
      icon: BookOpen,
      title: 'Projetos Customizados e Treinamentos',
      description: 'Soluções personalizadas e capacitação profissional'
    },
    {
      icon: FileCheck,
      title: 'Regularização junto ao CREA',
      description: 'Regularizamos sua empresa junto ao CREA e atribuímos um responsável técnico. Dessa maneira evita futuras multas emitidas pelo CREA'
    },
    {
      icon: ClipboardCheck,
      title: 'Elaboração de PMOC',
      description: 'Plano de Manutenção Operação e Controle para garantir a eficiência e segurança dos sistemas'
    },
    {
      icon: Shield,
      title: 'Assessoria Jurídica Especializada',
      description: 'Suporte legal completo em questões trabalhistas e de segurança do trabalho'
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva e Corretiva',
      description: 'Programas de manutenção para equipamentos de segurança e sistemas de proteção'
    },
    {
      icon: Star,
      title: 'Atendimento Personalizado 24/7',
      description: 'Suporte técnico disponível a qualquer momento para emergências e consultorias'
    }
  ];

  return (
    <section id="diferencial" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-[#001F3F] mb-4">
            Nosso Diferencial
          </h2>
          <div className="w-24 h-1 bg-[#4A90E2] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que nos torna únicos no mercado de segurança do trabalho e saúde ocupacional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4A90E2] bg-opacity-10 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#4A90E2]" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#4A90E2]">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#001F3F] mb-4">
                Compromisso com a Qualidade
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                Oferecemos soluções completas e personalizadas em Segurança do Trabalho
                e Saúde Ocupacional para proteger vidas e negócios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differential;