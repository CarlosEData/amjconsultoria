import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}
Serviço de Interesse: ${formData.service}
Mensagem: ${formData.message}
    `;

    const mailtoLink = `mailto:contato@amjconsultoria.com.br?subject=Contato via Website - ${formData.name}&body=${encodeURIComponent(emailBody)}`;

    alert('Formulário em desenvolvimento. Entre em contato pelos canais disponíveis.');

    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'PGR - Programa de Gerenciamento de Riscos',
    'PCMSO - Programa de Controle Médico',
    'Laudo de Insalubridade',
    'Laudo de Periculosidade',
    'Licenciamento Ambiental',
    'Linhas de Vida',
    'Treinamentos NRs',
    'Locação de Equipamentos',
    'Consultoria Especializada',
    'Outros'
  ];

  return (
    <section id="contato" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
            <span className="text-xs font-mono text-slate-400 tracking-[0.3em] uppercase">Entre em Contato</span>
            <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent flex-1"></div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 text-center tracking-tight mb-6">
            Fale Conosco
          </h2>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto font-light">
            Solicite um orçamento personalizado para sua empresa
          </p>
        </div>

        {/* Visual Feature */}
        <div className="relative mb-16 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Professional Team"
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="border-l-4 border-slate-900 pl-6">
              <h3 className="text-2xl font-light text-slate-900 mb-8 tracking-tight">
                Informações
              </h3>

              <div className="space-y-8">
                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-slate-300 flex items-center justify-center group-hover:border-slate-900 transition-colors flex-shrink-0">
                      <MapPin className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2 uppercase tracking-wide">Endereço</h4>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        Rua Nelson Rodrigues 195A - Zabele<br />
                        Vitória da Conquista - BA<br />
                        CEP: 45079-160
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-slate-300 flex items-center justify-center group-hover:border-slate-900 transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2 uppercase tracking-wide">Telefone</h4>
                      <a href="tel:77999887766" className="text-slate-600 hover:text-slate-900 font-light text-sm transition-colors">
                        (77) 99988-7766
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-slate-300 flex items-center justify-center group-hover:border-slate-900 transition-colors flex-shrink-0">
                      <Mail className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2 uppercase tracking-wide">E-mail</h4>
                      <a href="mailto:contato@amjconsultoria.com.br" className="text-slate-600 hover:text-slate-900 font-light text-sm transition-colors break-all">
                        contato@amjconsultoria.com.br
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-slate-300 flex items-center justify-center group-hover:border-slate-900 transition-colors flex-shrink-0">
                      <Clock className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-900 mb-2 uppercase tracking-wide">Horário</h4>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 8h às 12h
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 border-l-2 border-slate-300">
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                Nossa equipe está pronta para atender suas necessidades com soluções
                personalizadas em Segurança do Trabalho, Medicina Ocupacional e Meio Ambiente.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 p-8 md:p-12">
              <h3 className="text-2xl font-light text-slate-900 mb-8 tracking-tight">
                Solicite seu Orçamento
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-900 mb-3 uppercase tracking-wide">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Digite seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-900 mb-3 uppercase tracking-wide">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors font-light"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-900 mb-3 uppercase tracking-wide">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors font-light"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-900 mb-3 uppercase tracking-wide">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors font-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-900 mb-3 uppercase tracking-wide">
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors font-light appearance-none cursor-pointer"
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-900 mb-3 uppercase tracking-wide">
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    placeholder="Descreva suas necessidades"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors resize-none font-light"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="group relative overflow-hidden bg-slate-900 text-white px-12 py-4 transition-all duration-500 hover:pr-16"
                  >
                    <span className="relative z-10 text-sm font-mono tracking-wider uppercase flex items-center gap-2">
                      Enviar Mensagem
                      <Send className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
