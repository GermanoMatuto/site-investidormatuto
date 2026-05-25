import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Users, Clock, AlertCircle, CheckCircle2, TrendingDown, Zap } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';

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

const Home: React.FC = () => {
  usePageMeta(
    "Início - Aprenda a Investir em Criptomoedas",
    "Aprenda a investir em criptomoedas com Erivelton Germano, o Investidor Matuto. Tutoriais, exchanges, mentoria e comunidade."
  );
  const [scrollY, setScrollY] = useState(0);
  const [isPhotoVisible, setIsPhotoVisible] = useState(true);
  const photoRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Trigger the "reveal" animation again when scrolling
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setIsPhotoVisible(false);
        setTimeout(() => setIsPhotoVisible(true), 10);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        .animate-reveal {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
      
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
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

            <div className="hidden md:flex justify-end items-center relative">
              <div className="absolute -inset-8 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
              
              <div 
                ref={photoRef}
                className={`relative z-20 w-full max-w-lg image-container ${isPhotoVisible ? 'animate-reveal' : 'opacity-0'}`}
                style={{
                  transform: `translateX(${Math.min(scrollY * 0.1, 30)}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <img
                  src="/assets/erivelton-photo.png"
                  alt="Erivelton Germano - Investidor Matuto"
                  className="w-full h-auto object-cover shadow-2xl rounded-lg"
                  style={{
                    maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,0) 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 85%, rgba(0,0,0,0) 100%)',
                    borderRadius: '0px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primeiros Passos Section (Dicas) */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Comece Aqui
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Sua trilha de aprendizado para dominar criptomoedas com segurança e método
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "1",
                title: "Entenda o Mercado",
                desc: "Aprenda o que é Bitcoin, blockchain e por que criptomoedas importam. Conhecimento é sua melhor defesa contra erros caros.",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2",
                title: "Abra sua Conta",
                desc: "Escolha uma exchange confiável e segura. Veja nossos tutoriais completos para OKX, Gate.io, BingX e outras plataformas.",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "3",
                title: "Proteja seu Capital",
                desc: "Segurança em cripto não é opcional. Aprenda sobre 2FA, hardware wallets e como evitar os golpes mais comuns.",
                color: "from-green-500 to-green-600"
              }
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center font-bold text-xl mb-6 shadow-lg`}>
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-gray-300 text-lg mb-6">
              <strong className="text-white">Lembre-se:</strong> Investimento em cripto requer educação contínua, gestão de risco disciplinada e controle emocional.
            </p>
            <p className="text-gray-400 text-base">
              Explore nossos guias detalhados nas páginas de cada exchange, confira nosso Imposto de Renda e junte-se à comunidade no Telegram para tirar dúvidas.
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
