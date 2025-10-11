import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O que é PGR e como vocês implementam?',
      answer: 'O Programa de Gerenciamento de Riscos (PGR) é obrigatório pelas NR-01, NR-18 e NR-22. Implementamos um diagnóstico completo dos riscos, medidas de controle e monitoramento contínuo para garantir a segurança dos colaboradores.'
    },
    {
      question: 'Como funciona o PCMSO e quais exames são incluídos?',
      answer: 'O PCMSO (NR-07) inclui exames admissionais, periódicos, demissionais e de retorno ao trabalho. Nossa equipe médica especializada realiza o diagnóstico completo da saúde ocupacional dos colaboradores.'
    },
    {
      question: 'Vocês fazem o envio do eSocial?',
      answer: 'Sim, fazemos toda a gestão do eSocial da sua empresa, incluindo eventos de SST, monitoramento contínuo e compliance digital. Garantimos que todas as obrigações sejam cumpridas corretamente.'
    },
    {
      question: 'Quais treinamentos de NRs vocês oferecem?',
      answer: 'Oferecemos treinamentos presenciais e EAD para diversas Normas Regulamentadoras, incluindo NR-5 (CIPA), NR-10 (Eletricidade), NR-35 (Trabalho em Altura), entre outras. Todos com certificação válida.'
    },
    {
      question: 'Como solicitar um orçamento?',
      answer: 'Entre em contato conosco através do formulário no site, telefone ou e-mail. Nossa equipe retornará com uma proposta personalizada para atender as necessidades da sua empresa.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#001F3F] to-[#0A2540]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif text-white mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-24 h-1 bg-[#4A90E2] mx-auto mb-8"></div>
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre nossos serviços de SST
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl border border-white border-opacity-20"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-all duration-300 rounded-xl"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-[#4A90E2] flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="h-px bg-white bg-opacity-20 mb-4"></div>
                  <p className="text-white text-opacity-90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;