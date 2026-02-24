import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Menu, X, Send, Youtube, Instagram, Mail, CheckCircle2, Zap, Shield, TrendingUp, BookOpen, Target } from 'lucide-react';

const Curso: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO", active: true },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/okx", label: "OKX" },
    { href: "/exchanges", label: "EXCHANGES" },
    { href: "/hardwallet", label: "HARDWALLET" },
    { href: "/kast", label: "KAST" },
    { href: "/imposto-de-renda", label: "IMPOSTO DE RENDA" },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
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

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-8 tracking-tight">
              Aprenda Cripto <span className="text-blue-400">do Zero</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Conteúdo educativo gratuito para você começar sua jornada no mercado de criptomoedas com segurança, método e pé no chão.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Espera Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-t border-gray-900">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-900/10 border border-blue-500/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="text-blue-400 flex-shrink-0 mt-1" size={28} />
              <div>
                <h2 className="text-3xl font-bold mb-3">Curso Oficial em Breve</h2>
                <p className="text-gray-400 text-lg">
                  Estamos preparando um treinamento completo e estruturado. Deixe seu e-mail para receber os guias gratuitos e ser avisado quando o curso lançar com condições especiais para os primeiros inscritos.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors whitespace-nowrap"
              >
                Inscrever
              </button>
            </form>

            {subscribed && (
              <p className="text-green-400 text-sm mt-4 flex items-center gap-2">
                <CheckCircle2 size={16} /> E-mail registrado com sucesso!
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Trilha Cripto do Zero */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Trilha: Cripto do Zero
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comece por aqui se você nunca investiu em criptomoedas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "O Mindset do Investidor",
                desc: "Entenda a diferença entre apostar e investir. Aprenda por que paciência, disciplina e controle emocional são suas maiores armas no mercado cripto."
              },
              {
                icon: Shield,
                title: "Segurança Prática",
                desc: "O checklist essencial: 2FA, senhas fortes, seed phrases e por que você NUNCA deve deixar tudo na exchange. Segurança não é opcional."
              },
              {
                icon: TrendingUp,
                title: "Sua Primeira Compra",
                desc: "Guia visual passo a passo: como transformar Reais em Cripto usando as exchanges que recomendamos. Rápido, seguro e sem surpresas."
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="group p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
                  <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <IconComponent className="text-blue-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regras de Ouro */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              As 5 Regras de Ouro do Matuto
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Princípios baseados em 6 anos de experiência e aprendizado no mercado cripto
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "1",
                title: "Nunca invista o dinheiro do aluguel",
                desc: "Só coloque em cripto o dinheiro que você pode perder sem afetar sua vida. Cripto é volatilidade, não é poupança."
              },
              {
                num: "2",
                title: "Entenda o que você está comprando",
                desc: "Não compre apenas porque 'todo mundo está ganhando'. Leia o whitepaper, entenda o projeto, saiba por que existe."
              },
              {
                num: "3",
                title: "Gestão de risco: O stop-loss é seu melhor amigo",
                desc: "Defina antes de entrar: até quanto você está disposto a perder? Respeite esse limite. Emoção é inimiga do trader."
              },
              {
                num: "4",
                title: "Lucro bom é lucro no bolso",
                desc: "Não fique preso à ideia de 'vender no topo'. Realize ganhos parciais. Quem realiza lucro evolui, quem espera se arrepende."
              },
              {
                num: "5",
                title: "Estude antes de clicar",
                desc: "Cada clique é uma decisão. Estude gráficos, narrativas, fundamentos. Conhecimento reduz erros e acelera evolução."
              }
            ].map((regra, idx) => (
              <div key={idx} className="group bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl font-bold text-blue-500/30 group-hover:text-blue-500 transition-colors">{regra.num}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{regra.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{regra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vídeos Essenciais */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Vídeos Essenciais
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comece por esses 4 vídeos fundamentais antes de qualquer coisa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Bitcoin: O Que Você Precisa Saber",
                desc: "Entenda o que é Bitcoin, por que foi criado e por que importa. O fundamento de tudo."
              },
              {
                title: "Segurança em Cripto: Não Perca Seu Dinheiro",
                desc: "Os erros mais caros do mercado cripto. Como evitar golpes, phishing e perder seus ativos."
              },
              {
                title: "Sua Primeira Compra: Passo a Passo",
                desc: "Como abrir conta em uma exchange, fazer verificação e comprar sua primeira fração de cripto."
              },
              {
                title: "Gestão de Risco: O Segredo dos Traders",
                desc: "Por que alguns traders ganham consistentemente e outros perdem tudo. A resposta está aqui."
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
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] border-t border-gray-900">
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
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
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
            {/* Copyright */}
            <p className="text-gray-500 text-sm">&copy; 2026 Investidor Matuto. Todos os direitos reservados.</p>
            
            {/* Separador */}
            <span className="text-gray-600">|</span>
            
            {/* Slogan */}
            <p className="text-gray-400 font-semibold text-sm">Quem vence? Quando você vence.</p>
            
            {/* Separador */}
            <span className="text-gray-600">|</span>
            
            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              {/* X (Twitter) */}
              <a href="https://twitter.com/invest_matuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.67-5.829 6.67H2.422l7.723-8.835L1.254 2.25h6.554l4.882 6.467 5.633-6.467zM17.534 20.766h1.832L6.455 3.812H4.527l13.007 16.954z"/></svg>
              </a>
              
              {/* Telegram */}
              <a href="https://t.me/+vva2e0bVkoFiNWFh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Telegram">
                <Send size={20} />
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              
              {/* YouTube */}
              <a href="https://www.youtube.com/@investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/investidormatuto/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Curso;
