import React from 'react';
import { ArrowRight, CreditCard, Globe, Zap, TrendingUp, CheckCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AFFILIATE_LINKS } from '@/const';
import { usePageMeta } from '@/hooks/usePageMeta';

const Kast: React.FC = () => {
  usePageMeta(
    "Kast - Deposite com Cripto, Gaste com PIX",
    "Deposite criptomoedas na Kast e gaste com PIX ou Cartão VISA em qualquer lugar do Brasil. Disponível agora para brasileiros."
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header />

      {/* Hero Section - PIX Focus */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 text-sm font-semibold">✨ AGORA NO BRASIL COM PIX</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-6 tracking-tight">
            Deposite com Cripto.<br /><span className="text-blue-400">Gaste com PIX.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Agora você pode depositar suas criptomoedas (BTC, ETH, SOL, XRP) na Kast e gastar com PIX ou Cartão VISA em qualquer lugar do Brasil.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-8">
            <div className="flex flex-col gap-4">
              <a 
                href={AFFILIATE_LINKS.kast}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 text-lg"
              >
                Abrir Conta Kast Agora
                <ArrowRight size={24} />
              </a>
              <a 
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 border-2 border-blue-500 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-semibold rounded-lg transition-all duration-300 text-lg"
              >
                Ver Como Funciona
              </a>
            </div>

            <div className="flex justify-center">
              <img src="/assets/kast/hero-phone.webp" alt="Kast App com PIX" className="w-full max-w-md h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Assista ao Vídeo Explicativo</h2>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
              src="https://www.youtube.com/embed/QCr2zBmr6oU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* PIX Integration Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Como o PIX Funciona com KAST
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center font-bold text-blue-400">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Deposite de Forma Rápida com PIX</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Transfira suas criptomoedas (BTC, ETH, SOL, XRP) para a Kast e converta automaticamente para USDC ou USDT.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center font-bold text-blue-400">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Gaste onde Quiser com PIX ou VISA</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Use o PIX para transferências instantâneas ou o cartão VISA para compras em qualquer estabelecimento.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center font-bold text-blue-400">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Compatível com Seu Código PIX Pessoal</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Receba pagamentos com facilidade usando seu código PIX pessoal integrado à conta Kast.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <img src="/assets/kast/kast_spend.webp" alt="PIX com Kast" className="w-full max-w-md h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios com Imagens */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Benefícios Evoluídos de um Banco
          </h2>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img src="/assets/kast/kast_spend.webp" alt="Gastar com Kast" className="w-full max-w-md h-auto rounded-lg shadow-xl" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="text-blue-500" size={32} />
                  <h3 className="text-3xl font-bold">Gastar</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Pague com stablecoins em 150M+ lojas e caixas eletrônicos em todo o mundo. Use seu cartão VISA Kast em qualquer lugar, sem limites geográficos.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Aceito em 150M+ estabelecimentos</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Sem taxas de transação</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Conversão automática de stablecoins</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 flex justify-center">
                <img src="/assets/kast/kast_send.webp" alt="Enviar e Receber com Kast" className="w-full max-w-md h-auto rounded-lg shadow-xl" />
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-blue-500" size={32} />
                  <h3 className="text-3xl font-bold">Enviar & Receber</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Transfira dinheiro instantaneamente para qualquer pessoa no mundo. Sem taxas bancárias, sem espera, sem complicações. Agora com PIX!
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Transferências instantâneas com PIX</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Sem taxas bancárias</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Disponível em 170+ países</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <img src="/assets/kast/kast_grow.webp" alt="Crescer com Kast" className="w-full max-w-md h-auto rounded-lg shadow-xl" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="text-blue-500" size={32} />
                  <h3 className="text-3xl font-bold">Crescer</h3>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Faça seu dinheiro trabalhar para você. Ganhe rendimentos competitivos em suas stablecoins com segurança e transparência.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Rendimentos em stablecoins</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Segurança de nível bancário</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={20} className="text-blue-500" />
                    <span>Liquidez imediata</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-t from-[#0a0a0a] to-[#1a1a1a] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Pronto para evoluir sua vida financeira?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Junte-se a milhares de brasileiros que já estão usando a Kast para gastar suas criptos com PIX.
          </p>
          <a 
            href={AFFILIATE_LINKS.kast}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 text-xl"
          >
            Abrir Minha Conta Kast
            <ArrowRight size={28} />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Kast;
