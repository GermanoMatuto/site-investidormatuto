import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Users, TrendingUp, Zap, Target, Award, Clock, Send } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';

const Mentoria: React.FC = () => {
  usePageMeta(
    "Mentoria - Aprenda a Investir em Cripto",
    "Mentoria individual com Erivelton Germano, o Investidor Matuto. Aprenda estratégias profissionais de investimento em criptomoedas."
  );
  const [formData, setFormData] = useState({ 
    nome: '', 
    telefone: '', 
    email: '',
    problema: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.telefone && formData.email && formData.problema) {
      setSubmitted(true);
      setFormData({ nome: '', telefone: '', email: '', problema: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header />

      {/* Hero Section Premium */}
      <section className="relative py-32 md:py-40 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
              <Award size={16} className="text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Consultoria 1-on-1</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-left">
              Você Está com um <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Grande Problema</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-8">
              Precisa da atenção do Germano para te ajudar a solucionar? Ou quer aprender algo bem específico do mercado cripto? A mentoria individual é feita para quem quer resultados reais, não promessas vazias.
            </p>

            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Clock size={16} className="text-blue-400" />
              <span>Vagas limitadas a cada mês</span>
            </div>
          </div>
        </div>
      </section>

      {/* Diferencial Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Mentoria e Não Curso?</h2>
            <p className="text-gray-400 text-lg">Porque seu problema é único. Sua solução também precisa ser.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Atenção Personalizada",
                desc: "Análise individual da sua carteira, estratégia e objetivos. Sem templates genéricos."
              },
              {
                icon: TrendingUp,
                title: "Resultados Mensuráveis",
                desc: "Você sai com um plano de ação claro, objetivos definidos e métricas para acompanhar."
              },
              {
                icon: Zap,
                title: "Acesso Direto",
                desc: "Suporte via WhatsApp durante o período de mentoria. Dúvidas? Respostas rápidas do Germano."
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-600/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/30">
                    <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <IconComponent className="text-blue-400" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulário de Captura Premium */}
      <section className="relative py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a] border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/5 rounded-2xl blur-2xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-blue-500/30 rounded-2xl p-8 md:p-12 backdrop-blur">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Solicite Sua Mentoria</h2>
                <p className="text-gray-400 text-lg">
                  Descreva seu problema ou o que você quer aprender. Vamos avaliar se é o momento certo para trabalharmos juntos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="nome"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-800 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">WhatsApp</label>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="(11) 99999-9999"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-800 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-800 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Qual é seu problema ou dúvida específica?</label>
                  <textarea
                    name="problema"
                    placeholder="Descreva o desafio que você está enfrentando ou o que quer aprender. Quanto mais detalhes, melhor poderei ajudar."
                    value={formData.problema}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:bg-gray-800 transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-2 text-lg"
                >
                  Solicitar Mentoria
                  <ArrowRight size={20} />
                </button>

                {submitted && (
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400">
                    <CheckCircle2 size={20} />
                    <div>
                      <p className="font-semibold">Solicitação recebida!</p>
                      <p className="text-sm">Germano entrará em contato em breve para avaliar sua situação.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* O que Esperar Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Como Funciona a Mentoria</h2>
            <p className="text-lg text-gray-400">Processo simples e direto para máxima eficiência</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                num: "1",
                title: "Você Solicita",
                desc: "Preenche o formulário com seu problema ou objetivo específico."
              },
              {
                num: "2",
                title: "Avaliação",
                desc: "Germano avalia se é o momento certo para trabalhar juntos."
              },
              {
                num: "3",
                title: "Consultoria",
                desc: "Chamada 1-on-1 para entender profundamente sua situação."
              },
              {
                num: "4",
                title: "Acompanhamento",
                desc: "Suporte via WhatsApp durante o período de mentoria."
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/3 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
                <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-center text-xl font-bold mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a] border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Garantia de Qualidade</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Se após a primeira sessão você sentir que a mentoria não é o que você precisa, devolvemos 100% do investimento. Sem perguntas. Sem burocracia.
            </p>
            <p className="text-gray-400">
              Isso porque Germano só quer trabalhar com pessoas comprometidas em evoluir. E você merece um mentor que acredita no seu potencial.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para transformar sua jornada?</h2>
          <p className="text-gray-400 text-lg mb-12">
            Não espere mais. Cada dia que passa é uma oportunidade perdida de aprender e crescer.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#formulario"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
            >
              Solicitar Mentoria
              <ArrowRight size={20} />
            </a>
            <a
              href="https://t.me/+vva2e0bVkoFiNWFh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 font-semibold rounded-lg transition-colors duration-300"
            >
              Conversar no Telegram
              <Send size={20} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Mentoria;
