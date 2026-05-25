import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Youtube, Instagram, Users, Clock, Menu, X, Send, AlertCircle, CheckCircle2, TrendingDown, Zap } from 'lucide-react';

const TypewriterText: React.FC<{ text: string }> = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
      {displayedText}
      {displayedText.length < text.length && <span className="animate-pulse">|</span>}
    </p>
  );
};

const HeroPhoto: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const hasLeftRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (hasLeftRef.current) {
            // Reinicia a animação ao rolar de volta
            setVisible(false);
            hasLeftRef.current = false;
            setTimeout(() => setVisible(true), 50);
          }
        } else {
          hasLeftRef.current = true;
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden md:flex justify-end items-center relative" ref={ref}>
      <div className="absolute -inset-8 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
      <div
        className={`relative z-20 w-full max-w-lg image-container ${visible ? 'photo-visible' : 'photo-hidden'}`}
      >
        <div style={{ position: 'relative', display: 'block' }}>
          <img
            src="/erivelton.webp"
            alt="Erivelton Germano - Investidor Matuto"
            className="w-full h-auto object-cover"
            style={{ display: 'block' }}
          />
          {/* Fade overlay na base — dissolve suavemente para o fundo escuro */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '45%',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.15) 25%, rgba(10,10,10,0.5) 55%, rgba(10,10,10,0.85) 78%, #0a0a0a 100%)',
            pointerEvents: 'none',
            zIndex: 5
          }} />
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = {
    youtube: "https://www.youtube.com/@investidormatuto",
    instagram: "https://www.instagram.com/investidormatuto/",
    twitter: "https://twitter.com/invest_matuto",
    tiktok: "https://www.tiktok.com/@investidormatuto",
  };

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO" },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/hardwallet", label: "HARDWALLET" },
    { href: "/kast", label: "KAST" },
    { href: "/imposto-de-renda", label: "IMPOSTO DE RENDA" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out forwards;
        }
        .image-container {
          position: relative;
          overflow: visible;
        }
        .image-container img {
          display: block;
          width: 100%;
          height: auto;
        }
      `}</style>
      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.92) translateX(40px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateX(0);
          }
        }
        .photo-visible {
          animation: fadeInScale 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .photo-hidden {
          opacity: 0;
          transform: scale(0.92) translateX(40px);
        }
      `}</style>

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
                className="text-sm font-medium text-gray-400 hover:text-blue-400 transition-colors tracking-wider"
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
                  className="text-lg font-medium text-gray-300 hover:text-blue-400 transition-colors py-2 border-b border-gray-900 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden" style={{background: 'transparent'}}>
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0, opacity: 0.35 }}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability — cobre só o lado esquerdo para não escurecer a foto */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1, background: 'linear-gradient(to right, #0a0a0a 0%, #0a0a0a 38%, rgba(10,10,10,0.4) 58%, transparent 75%)' }}></div>
        {/* Fade na borda inferior da seção — dissolve a imagem para o fundo escuro */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 10, height: '350px', background: 'linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.08) 20%, rgba(10,10,10,0.25) 40%, rgba(10,10,10,0.55) 60%, rgba(10,10,10,0.82) 80%, #0a0a0a 100%)' }}></div>

        <div className="max-w-7xl mx-auto w-full" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid md:grid-cols-2 gap-0 items-center md:-mr-32">
            <div className="md:pr-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-8 tracking-tight">
                Aprenda a Investir e Ganhar Dinheiro <span className="text-blue-400">com Criptomoedas</span>
              </h1>

              <TypewriterText text="Descubra o universo das criptomoedas e estratégias de investimento que transformam vidas." />

              <div className="flex gap-4">
                <Link
                  href="/telegram"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
                >
                  Entrar na Comunidade <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <HeroPhoto />
          </div>
        </div>
      </section>

      {/* Lições Section */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">10 Lições Sinceras Sobre Cripto</h2>
            <p className="text-gray-400 text-lg">Verdades que ninguém te conta, mas você precisa ouvir</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "Cripto não é para ficar rico rápido",
                desc: "Se você quer ficar rico da noite para o dia, cripto não é seu lugar. Aqui você aprende a construir riqueza de forma consistente."
              },
              {
                num: "02",
                title: "Liquidação é parte do jogo",
                desc: "Se você nunca foi liquidado, talvez não esteja testando seus limites. Mas quando acontecer, aprenda e evolua."
              },
              {
                num: "03",
                title: "Seu maior inimigo é você mesmo",
                desc: "Não é o mercado. É o medo, a ganância e a falta de disciplina. Controle isso e você controla tudo."
              },
              {
                num: "04",
                title: "Diversificação é obrigatória",
                desc: "Colocar tudo em uma moeda é apostação, não investimento. Espalhe o risco, reduza a volatilidade."
              },
              {
                num: "05",
                title: "Estude antes de investir",
                desc: "Não compre porque influencer recomendou. Entenda o que você está comprando. Conhecimento é poder."
              },
              {
                num: "06",
                title: "Timing é quase impossível",
                desc: "Ninguém consegue vender no topo ou comprar no fundo. Foque em estratégia, não em timing perfeito."
              },
              {
                num: "07",
                title: "Segurança não é negociável",
                desc: "2FA, seed phrase offline, hardware wallet. Não é paranoia, é responsabilidade. Proteja seu capital."
              },
              {
                num: "08",
                title: "Comunidade importa",
                desc: "Rodeie-se de pessoas que pensam como você. Comunidades boas aceleram aprendizado e reduzem erros."
              },
              {
                num: "09",
                title: "Narrativa empurra preço, fundamento sustenta valor",
                desc: "Entenda a diferença. Hype vem e vai, mas projetos sólidos ficam. Invista em ambos, mas saiba o que é cada um."
              },
              {
                num: "10",
                title: "Paciência é sua maior vantagem",
                desc: "Quem aguenta ver seu portfólio cair 50% sem vender é quem fica rico. Emocionalidade destrói capital."
              }
            ].map((licao, idx) => (
              <div key={idx} className="group bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl font-bold text-blue-500/30 group-hover:text-blue-500 transition-colors">{licao.num}</div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{licao.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{licao.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-500/30 rounded-2xl p-12 text-center mt-16">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Criptomoedas não testam só seu conhecimento.</strong> Elas testam sua paciência, seu controle emocional e sua disciplina.
            </p>
            <p className="text-gray-400 text-base">
              Quem trata cripto como jogo tende a perder. Quem trata como processo tende a evoluir.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 md:px-12 bg-[#0d0d0d] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-blue-500 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6">
                Sobre o Criador
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-8">
                Quem é<br />
                <span className="text-blue-400">Investidor</span><br />
                <span className="text-blue-400">Matuto</span>
              </h2>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Sou <strong className="text-white">Erivelton Germano</strong>, o Investidor Matuto, educador financeiro focado em criptomoedas buscando reduzir riscos para quem quer aprender a investir com mais clareza e menos erros caros que possam te tirar desse incrível mercado.
              </p>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Atuo no mercado cripto há mais de 6 anos, sou o criador do canal <strong className="text-white">Investidor Matuto</strong> no YouTube onde tudo começou e um dos idealizadores do evento <strong className="text-white">BitHub</strong> e já palestrei em eventos como <strong className="text-white">BitSampa</strong>, <strong className="text-white">Blockchain Conference Brazil</strong> e <strong className="text-white">Ethereum Brasil</strong>, fui um dos vencedores do <strong className="text-white">Melhor Conteúdo do Binance Campus América Latina 2025</strong> (Binance Campus Patagônia).
              </p>

              <p className="text-gray-400 text-base leading-relaxed mb-6">
                Minha trajetória não foi feita só de acertos. Eu já passei por duas grandes liquidações no mercado de futuros — e foi isso que acelerou minha maturidade operacional. Porque "ganhar dinheiro" todo mundo promete. Mas falar sobre o que dá errado, o que quebra emocional e o que destrói capital… poucos têm coragem.
              </p>

              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Por isso, a minha mission como Investidor Matuto é simples: te ajudar a evitar os erros que fazem a maioria perder dinheiro, para que você consiga focar no que realmente importa — crescer com consistência, com gestão de risco e tomada de decisão mais inteligente. Decidi escrever minha própria história com bitcoin e altcoins— e agora quero ajudar você a escrever a sua, com estratégia, método e pé no chão.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">87K+</div>
                </div>
                <p className="text-gray-500 text-lg">Inscritos no YouTube</p>
              </div>

              <div className="border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">6+</div>
                </div>
                <p className="text-gray-500 text-lg">Anos no Mercado Cripto</p>
              </div>

              <div className="border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">2</div>
                </div>
                <p className="text-gray-500 text-lg">Liquidações (e Aprendizado)</p>
              </div>

              <div className="border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">100%</div>
                </div>
                <p className="text-gray-500 text-lg">Comprometido com Educação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pronto para começar sua jornada?</h2>
          <p className="text-gray-400 text-lg mb-12">Junte-se a milhares de pessoas que já estão aprendendo e investindo com confiança.</p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
            >
              Assistir no YouTube <Youtube size={20} />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 font-semibold rounded-lg transition-colors duration-300"
            >
              Seguir no Instagram <Instagram size={20} />
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
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="X">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.67-5.829 6.67H2.422l7.723-8.835L1.254 2.25h6.554l4.882 6.467 5.633-6.467zM17.534 20.766h1.832L6.455 3.812H4.527l13.007 16.954z"/></svg>
              </a>

              {/* YouTube */}
              <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>

              {/* Instagram */}
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
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

export default Home;
