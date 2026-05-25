import React from 'react';
import { ArrowRight, CheckCircle, Lock, Zap, Globe } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AFFILIATE_LINKS } from '@/const';
import { usePageMeta } from '@/hooks/usePageMeta';

const Gate: React.FC = () => {
  usePageMeta(
    "Gate.io - Gateway to Crypto",
    "Abra sua conta na Gate.io, a plataforma escolhida por 49 milhões de traders. Mais de 4.400 criptomoedas listadas com segurança comprovada."
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-8 tracking-tight">
            Gateway to <span className="text-blue-500">Crypto</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            A escolha número um de 49 milhões de negociadores ao redor do mundo. Acesse uma plataforma completa, segura e inovadora.
          </p>

          <a 
            href={AFFILIATE_LINKS.gate} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Criar Conta Agora
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Motivos Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-center">
            Por que Abrir Conta na Gate?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-6 items-start p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="flex-shrink-0">
                <CheckCircle className="text-blue-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">49 Milhões de Traders Confiam</h3>
                <p className="text-gray-400 leading-relaxed">
                  A plataforma mais escolhida do mundo. Uma comunidade ativa e segura de negociadores.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="flex-shrink-0">
                <Globe className="text-blue-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">4,400+ Criptomoedas Listadas</h3>
                <p className="text-gray-400 leading-relaxed">
                  Acesso a uma das maiores seleções de ativos digitais do mercado. Sempre atualizado com novos projetos.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="flex-shrink-0">
                <Lock className="text-blue-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">125% Taxa de Reserva Comprovada</h3>
                <p className="text-gray-400 leading-relaxed">
                  Prova de reserva total garantindo a segurança dos seus ativos. Auditoria transparente e confiável.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all">
              <div className="flex-shrink-0">
                <Zap className="text-blue-500" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Simple Earn com até 10% APR</h3>
                <p className="text-gray-400 leading-relaxed">
                  Ganhe rendimento passivo com seus ativos. Produtos de yield farming com taxas competitivas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gate;
