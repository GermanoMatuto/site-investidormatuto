import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">Erro 404</p>
        <h1 className="text-7xl md:text-9xl font-bold text-gray-800 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Página não encontrada</h2>
        <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar ao Início
        </Link>
      </div>

      <Footer />
    </div>
  );
}
