import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Hammer } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';

const Construction: React.FC = () => {
  usePageMeta(
    "Em Breve - Página em Construção",
    "Esta página está sendo preparada. Em breve você terá acesso a todo o conteúdo do Investidor Matuto."
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <div className="mb-8 flex justify-center">
            <Hammer size={80} className="text-blue-500 animate-bounce" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Em Construção
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
            Esta página está sendo desenvolvida com muito cuidado para trazer o melhor conteúdo e experiência para você. Em breve estará disponível!
          </p>

          <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
            <ArrowLeft size={20} />
            Voltar para Home
          </Link>
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
