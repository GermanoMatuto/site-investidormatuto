import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Menu, X, Send, Youtube, Instagram, CheckCircle2, BookOpen, Shield, TrendingUp, Zap, Lock } from 'lucide-react';

const Curso: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: '', telefone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO", active: true },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/hardwallet", label: "HARDWALLET" },
    { href: "/kast", label: "KAST" },
    { href: "/imposto-de-renda", label: "IMPOSTO DE RENDA" },
  ];

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
      {/* Header Padronizado com Menu Responsivo */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            INVESTIDOR MATUTO
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors tracking-wider ${link.active ? 'text-blue-400' : 'text-gray-400 hover:text-blue-400'}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-gray-800 animate-in fade-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg font-medium transition-colors py-2 border-b border-gray-900 last:border-0 ${link.active ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

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

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <p className="text-gray-500 text-sm">&copy; 2026 Investidor Matuto. Todos os direitos reservados.</p>
            <span className="text-gray-600">|</span>
            <p className="text-gray-400 font-semibold text-sm">Quem vence? Quando você vence.</p>
            <span className="text-gray-600">|</span>

            <div className="flex items-center gap-4">
              <a href="https://twitter.com/invest_matuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.67-5.829 6.67H2.422l7.723-8.835L1.254 2.25h6.554l4.882 6.467 5.633-6.467zM17.534 20.766h1.832L6.455 3.812H4.527l13.007 16.954z"/></svg>
              </a>
              <a href="https://www.youtube.com/@investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/investidormatuto/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
                <Instagram size={20} />
              </a>
              {/* Binance Square */}
              <a href="https://app.binance.com/uni-qr/cpro/investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors" title="Binance Square">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L7.31 4.69 9.88 7.25 12 5.13l2.12 2.12 2.57-2.56L12 0zM4.69 7.31L0 12l4.69 4.69 2.56-2.57L5.13 12l2.12-2.12-2.56-2.57zM19.31 7.31l-2.56 2.57L18.87 12l-2.12 2.12 2.56 2.57L24 12l-4.69-4.69zM9.88 9.88L7.31 12.44 9.88 15l2.12-2.12L14.12 15l2.57-2.56L14.12 9.88 12 12 9.88 9.88zM7.31 16.75L9.88 19.31 12 17.19l2.12 2.12 2.57-2.56L12 12.31l-4.69 4.44zM12 18.87l-2.12 2.12-2.57-2.56L12 24l4.69-4.69-2.57-2.56L12 18.87z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Curso;
