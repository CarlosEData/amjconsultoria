import React, { useState } from 'react';
import {
  Shield,
  Stethoscope,
  TreePine,
  Anchor,
  BookOpen,
  Wrench,
  Target,
  ArrowUpRight
} from 'lucide-react';
import ServiceModal from './ServiceModal';

interface ServiceDetail {
  title: string;
  description: string;
}

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  services: string[];
  summary?: string;
  details?: ServiceDetail[];
  number: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [expandedDetails, setExpandedDetails] = useState<{ [key: string]: boolean }>({});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: Shield,
      number: '01',
      title: 'Segurança do Trabalho | Higiene Ocupacional',
      description: 'Programas e laudos especializados para prevenção de riscos ocupacionais',
      color: '#06b6d4',
      services: [
        'PGR - Programa de Gerenciamento de Riscos',
        'PCMSO - Programa de Controle Médico e Saúde Ocupacional',
        'Laudo de Insalubridade e Periculosidade',
        'Envios de E-Social'
      ],
      summary: 'Solução essencial para garantir o acompanhamento da saúde ocupacional dos colaboradores, com foco na prevenção de doenças relacionadas ao trabalho e no cumprimento das exigências legais. A AMJ Consultoria oferece estrutura completa para realização de exames clínicos, laboratoriais e complementares, assegurando o bem-estar físico e mental dos trabalhadores.',
      details: [
        {
          title: 'Exames Admissionais, Demissionais, Periódicos, Retorno ao trabalho e Mudança de função',
          description: 'Avaliação médica completa em todas as fases do vínculo empregatício, garantindo a aptidão física e mental do trabalhador para as atividades laborais.'
        },
        {
          title: 'Exames Laboratoriais',
          description: 'Análises clínicas especializadas para identificação de riscos químicos e biológicos, incluindo hemogramas, toxicológicos e outros exames específicos conforme exposição ocupacional.'
        },
        {
          title: 'Audiometria',
          description: 'Exame específico para avaliação da acuidade auditiva dos trabalhadores expostos a níveis elevados de ruído, conforme requisitos da NR-07 e do Programa de Conservação Auditiva (PCA).'
        },
        {
          title: 'Espirometria',
          description: 'Teste de função pulmonar para trabalhadores expostos a agentes químicos, poeiras e demais fatores que possam comprometer o sistema respiratório.'
        }
      ]
    },
    {
      icon: Stethoscope,
      number: '02',
      title: 'Medicina do Trabalho',
      description: 'Cuidados médicos especializados para saúde ocupacional',
      color: '#10b981',
      services: [
        'Exames Admissionais, Demissionais e Periódicos',
        'Audiometria e Espirometria',
        'Avaliação Psicossocial'
      ],
      summary: 'A AMJ Consultoria atua com programas, laudos e avaliações técnicas que atendem às Normas Regulamentadoras (NRs), identificando riscos e controlando agentes físicos, químicos e biológicos no ambiente de trabalho.',
      details: [
        {
          title: 'PGR - Programa de Gerenciamento de Riscos (NR-1/NR-18/NR-22)',
          description: 'Documento obrigatório que substitui o PPRA, com foco na identificação, avaliação e controle dos riscos no ambiente de trabalho. É composto pelo Inventário de Riscos e pelo Plano de Ação.'
        },
        {
          title: 'PCMSO - Programa de Controle Médico e Saúde Ocupacional (NR-07)',
          description: 'Programa que visa monitorar a saúde dos trabalhadores com base nos riscos ocupacionais identificados, por meio da realização de exames clínicos e complementares.'
        },
        {
          title: 'PCA - Programa de Conservação Auditiva',
          description: 'Conjunto de ações preventivas e corretivas para proteger a audição dos trabalhadores expostos a níveis elevados de ruído, conforme exigência da NR-07.'
        },
        {
          title: 'PPR - Programa de Proteção Respiratória',
          description: 'Estabelece critérios para o uso adequado de equipamentos de proteção respiratória, especialmente em ambientes com contaminantes atmosféricos.'
        },
        {
          title: 'LTCAT - Laudo Técnico das Condições do Ambiente de Trabalho',
          description: 'Documento técnico que avalia se o ambiente de trabalho expõe o colaborador a agentes que justifiquem aposentadoria especial. É exigido pelo INSS.'
        },
        {
          title: 'Laudo de Insalubridade (NR-15)',
          description: 'Avalia a exposição a agentes nocivos à saúde para caracterização de atividades insalubres, servindo de base para o pagamento do adicional correspondente.'
        },
        {
          title: 'Laudo de Periculosidade (NR-16)',
          description: 'Documento técnico que identifica atividades perigosas, como exposição a inflamáveis, explosivos ou energia elétrica.'
        },
        {
          title: 'Envios de E-Social',
          description: 'Gestão completa dos envios obrigatórios ao Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas, garantindo conformidade com as exigências legais.'
        }
      ]
    },
    {
      icon: TreePine,
      number: '03',
      title: 'Meio Ambiente',
      description: 'Licenciamento e consultoria ambiental especializada',
      color: '#84cc16',
      services: [
        'Licenciamento Ambiental (Licença Prévia, de Instalação e de Operação)'
      ],
      summary: 'Consultoria especializada em licenciamento ambiental, oferecendo suporte completo para regularização de empreendimentos junto aos órgãos ambientais competentes. Atuamos em todas as fases do processo, desde estudos preliminares até a obtenção das licenças necessárias.',
      details: [
        {
          title: 'LP - Licença Prévia',
          description: 'Concedida na fase preliminar do planejamento do empreendimento, aprova sua localização e concepção, atestando a viabilidade ambiental e estabelecendo os requisitos básicos e condicionantes a serem atendidos nas próximas fases.'
        },
        {
          title: 'LI - Licença de Instalação',
          description: 'Autoriza a instalação do empreendimento ou atividade de acordo com as especificações constantes dos planos, programas e projetos aprovados, incluindo as medidas de controle ambiental e demais condicionantes.'
        },
        {
          title: 'LO - Licença de Operação',
          description: 'Autoriza a operação da atividade ou empreendimento, após a verificação do efetivo cumprimento das medidas de controle ambiental e condicionantes determinadas para a operação.'
        },
        {
          title: 'LS - Licença Simplificada',
          description: 'Procedimento administrativo simplificado para empreendimentos com impacto ambiental de pequeno porte, unificando as etapas de licenciamento em uma única fase.'
        },
        {
          title: 'LAC - Licença Ambiental por Compromisso',
          description: 'Modalidade de licenciamento para atividades de baixo impacto ambiental, baseada em compromissos assumidos pelo empreendedor para cumprimento de condicionantes pré-estabelecidas.'
        }
      ]
    },
    {
      icon: Anchor,
      number: '04',
      title: 'Linhas de Vida',
      description: 'Sistemas completos de proteção contra quedas',
      color: '#f97316',
      services: [
        'Projeto Técnico de Linha de Vida',
        'Instalação de Sistemas de Ancoragem',
        'Laudos de Resistência'
      ],
      summary: 'Oferecemos soluções completas em sistemas de proteção contra quedas, desde o projeto técnico até a instalação e certificação. Nossos sistemas atendem às normas NR-35 e garantem máxima segurança para trabalhos em altura.',
      details: [
        {
          title: 'Projeto Técnico de Linha de Vida',
          description: 'Desenvolvimento de projetos técnicos detalhados para sistemas de ancoragem, considerando as especificidades de cada ambiente e estrutura.'
        },
        {
          title: 'Instalação de Sistemas de Ancoragem',
          description: 'Instalação profissional de pontos de ancoragem e linhas de vida horizontais e verticais, com materiais certificados e mão de obra especializada.'
        },
        {
          title: 'Laudos de Resistência',
          description: 'Elaboração de laudos técnicos que comprovam a resistência e segurança dos sistemas instalados, conforme exigências da NR-35.'
        }
      ]
    },
    {
      icon: Wrench,
      number: '05',
      title: 'Locação de Equipamentos',
      description: 'Equipamentos de medição e monitoramento profissionais',
      color: '#64748b',
      services: [
        'Dosímetros',
        'Monitor de Vibração',
        'Decibelímetro com Banda de Oitava'
      ],
      summary: 'Locação de equipamentos especializados para medições de agentes ocupacionais, incluindo dosímetros de ruído, monitores de vibração e decibelímetros com banda de oitava. Equipamentos calibrados e certificados para garantir precisão nas medições.',
      details: [
        {
          title: 'Dosímetros',
          description: 'Equipamentos para medição de exposição ocupacional a ruído, essenciais para avaliação de riscos auditivos conforme NR-15 e NR-09.'
        },
        {
          title: 'Monitor de Vibração',
          description: 'Aparelhos para medição de vibração de corpo inteiro e vibração localizada em mãos e braços, atendendo requisitos da NR-15.'
        },
        {
          title: 'Decibelímetro com Banda de Oitava',
          description: 'Medidor de pressão sonora com análise em bandas de oitava para avaliações acústicas detalhadas do ambiente de trabalho.'
        }
      ]
    },
    {
      icon: Target,
      number: '06',
      title: 'Projetos Especiais',
      description: 'Soluções customizadas para necessidades específicas',
      color: '#ec4899',
      services: [
        'Consultoria Técnica Especializada',
        'Projetos Customizados de Segurança',
        'Análises de Viabilidade Técnica'
      ],
      summary: 'Desenvolvimento de projetos técnicos especializados e consultoria sob medida para atender necessidades específicas da sua empresa em segurança do trabalho, saúde ocupacional e meio ambiente.',
      details: [
        {
          title: 'Consultoria Técnica Especializada',
          description: 'Assessoria técnica especializada para resolução de problemas complexos e implementação de melhores práticas em SST.'
        },
        {
          title: 'Projetos Customizados de Segurança',
          description: 'Desenvolvimento de soluções personalizadas para atender demandas específicas de segurança e saúde ocupacional da sua empresa.'
        },
        {
          title: 'Análises de Viabilidade Técnica',
          description: 'Estudos técnicos detalhados para avaliação de viabilidade de projetos e implementações na área de SST e meio ambiente.'
        }
      ]
    },
    {
      icon: BookOpen,
      number: '07',
      title: 'Treinamentos Especializados',
      description: 'Capacitação profissional em todas as normas regulamentadoras',
      color: '#8b5cf6',
      services: [
        'NR-1 – Disposições Gerais',
        'NR-5 – CIPA',
        'NR-10 – Segurança em Eletricidade',
        'NR-35 – Trabalho em Altura',
        'E todas as demais NRs'
      ],
      summary: 'Capacitação profissional completa em Normas Regulamentadoras, oferecendo treinamentos presenciais e EAD com certificação válida. Nossos cursos são ministrados por instrutores qualificados e seguem rigorosamente as diretrizes estabelecidas pelo Ministério do Trabalho e Emprego.',
      details: [
        {
          title: 'NR-1 – Disposições Gerais e Gerenciamento de Riscos Ocupacionais',
          description: 'Fundamentos sobre gerenciamento de riscos ocupacionais e disposições gerais aplicáveis a todos os ambientes de trabalho.'
        },
        {
          title: 'NR-3 – Embargo e Interdição',
          description: 'Procedimentos para embargo e interdição de estabelecimentos, obras e equipamentos em situações de risco grave e iminente.'
        },
        {
          title: 'NR-4 – Serviços Especializados em Segurança e em Medicina do Trabalho',
          description: 'Organização e funcionamento dos SESMT nas empresas.'
        },
        {
          title: 'NR-5 – Comissão Interna de Prevenção de Acidentes',
          description: 'Constituição, organização e funcionamento da CIPA para prevenção de acidentes e doenças ocupacionais.'
        },
        {
          title: 'NR-6 – Equipamento de Proteção Individual – EPI',
          description: 'Seleção, uso, conservação e manutenção dos equipamentos de proteção individual.'
        },
        {
          title: 'NR-7 – Programa de Controle Médico de Saúde Ocupacional',
          description: 'Implementação e gerenciamento do PCMSO para monitoramento da saúde dos trabalhadores.'
        },
        {
          title: 'NR-9 – Avaliação e Controle das Exposições Ocupacionais',
          description: 'Identificação, avaliação e controle de agentes físicos, químicos e biológicos no ambiente de trabalho.'
        },
        {
          title: 'NR-10 – Segurança em Instalações e Serviços em Eletricidade',
          description: 'Medidas de proteção e prevenção de acidentes em instalações elétricas e serviços com eletricidade.'
        },
        {
          title: 'NR-11 – Transporte, Movimentação, Armazenagem e Manuseio de Materiais',
          description: 'Operação segura de equipamentos de transporte e movimentação de materiais.'
        },
        {
          title: 'NR-12 – Segurança no Trabalho em Máquinas e Equipamentos',
          description: 'Medidas de proteção para garantir a segurança na operação de máquinas e equipamentos.'
        },
        {
          title: 'NR-13 – Caldeiras, Vasos de Pressão e Tubulações',
          description: 'Requisitos de segurança para instalação, operação e manutenção de caldeiras e vasos de pressão.'
        },
        {
          title: 'NR-15 – Atividades e Operações Insalubres',
          description: 'Identificação e caracterização de atividades insalubres e seus limites de tolerância.'
        },
        {
          title: 'NR-16 – Atividades e Operações Perigosas',
          description: 'Caracterização de atividades perigosas envolvendo explosivos, inflamáveis e energia elétrica.'
        },
        {
          title: 'NR-17 – Ergonomia',
          description: 'Adaptação das condições de trabalho às características psicofisiológicas dos trabalhadores.'
        },
        {
          title: 'NR-18 – Segurança e Saúde no Trabalho na Indústria da Construção',
          description: 'Medidas de proteção específicas para atividades da construção civil.'
        },
        {
          title: 'NR-20 – Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis',
          description: 'Requisitos para trabalho seguro com inflamáveis e combustíveis.'
        },
        {
          title: 'NR-23 – Proteção Contra Incêndios',
          description: 'Medidas de prevenção e combate a incêndios nos locais de trabalho.'
        },
        {
          title: 'NR-24 – Condições Sanitárias e de Conforto nos Locais de Trabalho',
          description: 'Requisitos mínimos de higiene e conforto nos ambientes de trabalho.'
        },
        {
          title: 'NR-26 – Sinalização de Segurança',
          description: 'Padronização de cores e sinalizações para prevenção de acidentes.'
        },
        {
          title: 'NR-33 – Segurança e Saúde nos Trabalhos em Espaços Confinados',
          description: 'Procedimentos de segurança para trabalhos em espaços confinados.'
        },
        {
          title: 'NR-35 – Trabalho em Altura',
          description: 'Medidas de proteção para trabalhos realizados acima de 2 metros do nível inferior.'
        },
        {
          title: 'Demais Normas Regulamentadoras',
          description: 'Treinamentos disponíveis para todas as 38 NRs vigentes, incluindo NR-22 (Mineração), NR-29 (Portuário), NR-31 (Agricultura), NR-32 (Saúde), NR-34 (Naval), NR-36 (Abate e Carnes), NR-37 (Plataformas de Petróleo) e NR-38 (Limpeza Urbana).'
        }
      ]
    }
  ];

  const handleOpenModal = (service: Service) => {
    setSelectedService(service);
    setExpandedDetails({});
  };

  const handleCloseModal = () => {
    setSelectedService(null);
    setExpandedDetails({});
  };

  const handleToggleDetail = (title: string) => {
    setExpandedDetails(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <section id="servicos" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
            <span className="text-xs font-mono text-slate-400 tracking-[0.3em] uppercase">Portfólio de Serviços</span>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 text-center tracking-tight mb-6">
            Excelência Técnica
          </h2>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto font-light">
            Soluções integradas em Segurança do Trabalho, Saúde Ocupacional e Meio Ambiente
          </p>
        </div>

        {/* Visual Banner */}
        <div className="relative mb-16 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Safety First"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                Protegendo pessoas, otimizando processos e garantindo conformidade com as normas regulamentadoras
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative bg-slate-50 border-l-4 transition-all duration-500 overflow-hidden"
                style={{
                  borderLeftColor: hoveredIndex === index ? service.color : '#e2e8f0',
                  backgroundColor: hoveredIndex === index ? `${service.color}05` : '#f8fafc'
                }}
              >
                {/* Number watermark */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[12rem] font-bold opacity-[0.03] select-none pointer-events-none transition-opacity duration-500"
                  style={{ color: service.color }}
                >
                  {service.number}
                </div>

                <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
                  {/* Left: Icon & Number */}
                  <div className="flex-shrink-0">
                    <div className="flex items-start gap-6">
                      <div className="relative">
                        <div
                          className="w-20 h-20 flex items-center justify-center transition-all duration-500"
                          style={{
                            backgroundColor: hoveredIndex === index ? service.color : 'white',
                            border: `2px solid ${hoveredIndex === index ? service.color : '#e2e8f0'}`,
                          }}
                        >
                          <service.icon
                            className="w-10 h-10 transition-colors duration-500"
                            style={{ color: hoveredIndex === index ? 'white' : service.color }}
                          />
                        </div>
                      </div>
                      <div className="font-mono text-6xl font-light transition-colors duration-500"
                        style={{ color: hoveredIndex === index ? service.color : '#cbd5e1' }}
                      >
                        {service.number}
                      </div>
                    </div>
                  </div>

                  {/* Middle: Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-4 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 font-light leading-relaxed">
                      {service.description}
                    </p>

                    {/* Services list */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm">
                          <div
                            className="w-1 h-1 rounded-full mt-2 flex-shrink-0 transition-all duration-500"
                            style={{
                              backgroundColor: hoveredIndex === index ? service.color : '#cbd5e1',
                              width: hoveredIndex === index ? '6px' : '4px',
                              height: hoveredIndex === index ? '6px' : '4px'
                            }}
                          />
                          <span className="text-slate-700 font-light">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="group/btn relative overflow-hidden px-8 py-4 bg-slate-900 text-white transition-all duration-500 hover:pr-12"
                    >
                      <span className="relative z-10 text-sm font-mono tracking-wider uppercase flex items-center gap-2">
                        Explorar
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </span>
                      <div
                        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"
                        style={{ backgroundColor: service.color }}
                      />
                    </button>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="h-1 transition-all duration-500 origin-left"
                  style={{
                    backgroundColor: service.color,
                    transform: hoveredIndex === index ? 'scaleX(1)' : 'scaleX(0)'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          title={selectedService.title}
          summary={selectedService.summary || ''}
          details={selectedService.details || []}
          expandedDetails={expandedDetails}
          onToggleDetail={handleToggleDetail}
        />
      )}
    </section>
  );
};

export default Services;
