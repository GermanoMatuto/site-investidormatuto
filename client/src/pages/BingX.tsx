import React from 'react';
import { ArrowRight, CheckCircle, Zap, Globe, Copy, Lock, Award, TrendingUp } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AFFILIATE_LINKS } from '@/const';
import { usePageMeta } from '@/hooks/usePageMeta';

const BingX: React.FC = () => {
  usePageMeta(
    "BingX - Copy Trading e Bônus de até 5.000 USDT",
    "Abra sua conta na BingX com bônus exclusivo. Copy trading avançado, segurança comprovada e suporte completo em português."
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header />

      {/* Hero Section - CTA Destacado */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 text-sm font-semibold">🎁 BÔNUS EXCLUSIVO: 5,000 USDT</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-6 tracking-tight">
            Abra sua Conta<br /><span className="text-blue-500">BingX Agora</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Plataforma de trading de criptomoedas com copy trading avançado, segurança comprovada e suporte completo em português.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href={AFFILIATE_LINKS.bingx} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 text-lg"
            >
              Abrir Conta BingX Agora
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Benefícios Principais */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">
            Por que Abrir Conta na BingX?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/30">
              <div className="mb-4 inline-flex p-3 bg-blue-500/10 rounded-lg">
                <Zap className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Cadastro Rápido</h3>
              <p className="text-gray-400 leading-relaxed">
                Abra sua conta em apenas 3 minutos. Interface intuitiva e fácil de usar para iniciantes e profissionais.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/30">
              <div className="mb-4 inline-flex p-3 bg-blue-500/10 rounded-lg">
                <Copy className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Copy Trading</h3>
              <p className="text-gray-400 leading-relaxed">
                Copie as estratégias dos melhores traders automaticamente. Social trading com histórico transparente e verificado.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/30">
              <div className="mb-4 inline-flex p-3 bg-blue-500/10 rounded-lg">
                <Lock className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">100% Seguro</h3>
              <p className="text-gray-400 leading-relaxed">
                Prova de reservas auditada pela CertiK. Seus ativos estão protegidos com segurança de nível institucional.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/30">
              <div className="mb-4 inline-flex p-3 bg-blue-500/10 rounded-lg">
                <TrendingUp className="text-blue-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Múltiplos Produtos</h3>
              <p className="text-gray-400 leading-relaxed">
                Spot trading, futuros, bots de trading, copy trading, staking e muito mais em uma plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BingX;
