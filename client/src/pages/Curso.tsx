import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Shield, TrendingUp, Zap, Lock, Youtube } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';

const Curso: React.FC = () => {
  usePageMeta(
    "Curso de Criptomoedas - Do Zero ao Avançado",
    "Curso completo de criptomoedas com Investidor Matuto. Aprenda do básico ao avançado com estratégias práticas e testadas."
  );
  const [formData, setFormData] = useState({ nome: '', telefone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nome && formData.telefone && formData.email) {
      setSubmitted(true);
      setFormData({ nome: '', telefone: '', email: '' });
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
              <Zap size={16} className="text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">Educação em Criptomoedas</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight text-left">
              Aprenda Cripto <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">do Zero</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed">
              Conteúdo educativo estruturado e gratuito para você começar sua jornada no mercado de criptomoedas com segurança, método e pé no chão.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Espera Premium Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-12 bg-[#0a0a0a] border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-600/5 rounded-2xl blur-2xl"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-blue-500/30 rounded-2xl p-8 md:p-12 backdrop-blur">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left Side - Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Lock className="text-blue-400" size={24} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">Acesso VIP Antecipado</h2>
                  </div>
                  
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                    O curso oficial está sendo preparado com muito cuidado. Deixe seus dados para:
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      'Receber guias gratuitos exclusivos',
                      'Ser notificado quando o curso lançar',
                      'Acesso especial para primeiros inscritos',
                      'Comunidade VIP no Telegram'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-300">
                        <CheckCircle2 size={18} className="text-blue-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side - Form */}
                <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
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

                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-2"
                    >
                      Garantir Acesso VIP
                      <ArrowRight size={18} />
                    </button>

                    {submitted && (
                      <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-2 text-green-400 text-sm">
                        <CheckCircle2 size={18} />
                        Cadastro realizado com sucesso! Confira seu e-mail.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trilha Cripto do Zero */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              As 5 Regras de Ouro
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Princípios baseados em 6 anos de experiência e aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "O Mindset do Investidor",
                desc: "Entenda a diferença entre apostar e investir. Aprenda por que paciência, disciplina e controle emocional são suas maiores armas."
              },
              {
                icon: Shield,
                title: "Segurança Prática",
                desc: "O checklist essencial: 2FA, senhas fortes, seed phrases. Segurança em cripto não é opcional, é obrigatório."
              },
              {
                icon: TrendingUp,
                title: "Sua Primeira Compra",
                desc: "Guia visual passo a passo: como transformar Reais em Cripto usando as exchanges que recomendamos."
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

      {/* Regras de Ouro */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a] border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Comece Aqui
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Sua trilha de aprendizado para dominar criptomoedas com segurança e método
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Nunca invista o dinheiro do aluguel",
                desc: "Só coloque em cripto o dinheiro que você pode perder sem afetar sua vida."
              },
              {
                num: "02",
                title: "Entenda o que você está comprando",
                desc: "Não compre apenas porque 'todo mundo está ganhando'. Entenda o projeto."
              },
              {
                num: "03",
                title: "Gestão de risco: O stop-loss é seu amigo",
                desc: "Defina antes de entrar: até quanto você está disposto a perder?"
              },
              {
                num: "04",
                title: "Lucro bom é lucro no bolso",
                desc: "Realize ganhos parciais. Quem realiza lucro evolui, quem espera se arrepende."
              },
              {
                num: "05",
                title: "Estude antes de clicar",
                desc: "Cada clique é uma decisão. Estude gráficos, narrativas e fundamentos."
              }
            ].map((regra, idx) => (
              <div key={idx} className="group bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-500/40 group-hover:text-blue-500 transition-colors">{regra.num}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{regra.title}</h3>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{regra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeos Essenciais */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Vídeos Essenciais
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Comece por esses 4 vídeos fundamentais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Bitcoin: O Que Você Precisa Saber",
                desc: "Entenda o que é Bitcoin, por que foi criado e por que importa."
              },
              {
                title: "Segurança em Cripto: Não Perca Seu Dinheiro",
                desc: "Os erros mais caros do mercado cripto e como evitá-los."
              },
              {
                title: "Sua Primeira Compra: Passo a Passo",
                desc: "Como abrir conta, fazer verificação e comprar sua primeira fração."
              },
              {
                title: "Gestão de Risco: O Segredo dos Traders",
                desc: "Por que alguns ganham consistentemente e outros perdem tudo."
              }
            ].map((video, idx) => (
              <div key={idx} className="group bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
                <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Youtube className="text-blue-500" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{video.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{video.desc}</p>
                <a
                  href="https://www.youtube.com/@investidormatuto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold text-sm"
                >
                  Assistir no YouTube <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f1a] border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-gray-400 text-lg mb-12">
            Junte-se à comunidade do Investidor Matuto e comece sua jornada com segurança e método.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://t.me/+vva2e0bVkoFiNWFh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
            >
              Entrar no Telegram
              <ArrowRight size={20} />
            </a>
            <a
              href="https://www.youtube.com/@investidormatuto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 font-semibold rounded-lg transition-colors duration-300"
            >
              Assistir no YouTube
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Curso;
