import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Users, Clock, AlertCircle, CheckCircle2, TrendingDown, Zap } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';
import { SOCIAL_LINKS } from '@/const';

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
                  <Users size={32} className="text-yellow-500 group-hover:text-yellow-400 transition-colors" />
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">25K+</div>
                </div>
                <p className="text-gray-500 text-lg">Seguidores no Binance Square</p>
              </div>

              <div className="border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">21K</div>
                </div>
                <p className="text-gray-500 text-lg">Seguidores no TikTok</p>
              </div>

              <div className="border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">9.5K+</div>
                </div>
                <p className="text-gray-500 text-lg">Seguidores no Instagram</p>
              </div>

              <div className="border border-gray-800 rounded-lg p-8 hover:border-blue-500 transition-colors group">
                <div className="flex items-center gap-4 mb-3">
                  <Clock size={32} className="text-blue-500 group-hover:text-blue-400 transition-colors" />
                  <div className="text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">6+</div>
                </div>
                <p className="text-gray-500 text-lg">Anos de experiência no mercado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Lições Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0d0d0d] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-500 uppercase tracking-[0.3em] text-xs md:text-sm font-semibold mb-6">Realidade do Mercado</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-8">10 Lições Super Sinceras <br /> Sobre Criptomoedas</h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">Aprenda com quem já errou, aprendeu e evoluiu. Essas são as verdades que ninguém quer falar.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                num: "01",
                title: "Cripto não é uma máquina de dinheiro fácil",
                desc: "Muita gente entra achando que encontrou um atalho. Quando o mercado corrige, descobre da forma mais cara que volatilidade não perdoa. Cripto pode acelerar ganhos, mas também acelera erros.",
                icon: TrendingDown
              },
              {
                num: "02",
                title: "Quem compra sem entender, vende com medo",
                desc: "Se você entrou porque alguém falou ou porque 'todo mundo está ganhando', você não comprou um ativo. Você comprou ansiedade. Na primeira queda forte, o emocional assume o controle.",
                icon: AlertCircle
              },
              {
                num: "03",
                title: "Na alta, quase todo mundo parece gênio",
                desc: "Bull market cria falsos especialistas. Carteiras sobem, ego sobe junto. O problema aparece quando o mercado vira. É aí que dá para ver quem tem estratégia e quem só estava sendo carregado.",
                icon: Zap
              },
              {
                num: "04",
                title: "Realizar lucro é maturidade, não falta de visão",
                desc: "Muita gente ganha bem e devolve tudo porque fica presa na ideia de 'só vendo no topo'. O topo raramente avisa. Realização parcial e gestão separam crescimento de arrependimento.",
                icon: CheckCircle2
              },
              {
                num: "05",
                title: "Copiar operação dos outros é terceirizar seu risco",
                desc: "Você pode aprender com analistas e traders. Mas entrar só porque alguém entrou é perigoso. Você não sabe o tamanho da posição, o plano de saída, nem o nível de risco daquela pessoa.",
                icon: AlertCircle
              },
              {
                num: "06",
                title: "Moeda 'barata' no preço pode ser caríssima no risco",
                desc: "Token de centavos não significa oportunidade. Preço unitário baixo engana quem ainda não entende mercado. O que importa é capitalização, liquidez, utilidade e execução.",
                icon: TrendingDown
              },
              {
                num: "07",
                title: "Segurança em cripto não é opcional",
                desc: "Você pode acertar análise e mesmo assim perder dinheiro por erro básico. Link falso, golpe, contrato malicioso, seed exposta. No mercado cripto, não basta saber comprar. Você precisa saber proteger.",
                icon: AlertCircle
              },
              {
                num: "08",
                title: "Alavancagem amplifica tudo, inclusive seus erros",
                desc: "Alavancagem não é vilã. Mas na mão errada, vira destruição rápida. Sem gestão de risco e controle emocional, uma boa ideia pode virar liquidação em minutos.",
                icon: TrendingDown
              },
              {
                num: "09",
                title: "Narrativa empurra preço, fundamento sustenta valor",
                desc: "No curto prazo, atenção movimenta o mercado. No longo prazo, sobrevivem os projetos que entregam algo real. Hype pode gerar explosão, mas sem produto e execução, a narrativa perde força.",
                icon: Zap
              },
              {
                num: "10",
                title: "Perder dinheiro dói. Não aprender com isso custa mais caro",
                desc: "Todo mundo que fica tempo suficiente nesse mercado erra. A diferença está no que faz depois do erro. Quem revisa a entrada, o risco, o timing e o emocional evolui.",
                icon: CheckCircle2
              }
            ].map((licao, idx) => {
              const IconComponent = licao.icon;
              return (
                <div key={idx} className="group bg-gray-900/30 border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 hover:bg-gray-900/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl font-bold text-blue-500/30 group-hover:text-blue-500 transition-colors">{licao.num}</div>
                    <IconComponent size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{licao.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{licao.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-500/30 rounded-2xl p-12 text-center">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Criptomoedas não testam só seu conhecimento.</strong> Elas testam sua paciência, seu controle emocional e sua disciplina.
            </p>
            <p className="text-gray-400 text-base">
              Quem trata cripto como jogo tende a perder. Quem trata como processo tende a evoluir.
            </p>
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
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-600/50"
            >
              Assistir Agora
            </a>
            <Link
              href="/mentoria"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 px-8 py-4 font-semibold rounded-lg transition-colors duration-300"
            >
              Explorar Mentoria <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
