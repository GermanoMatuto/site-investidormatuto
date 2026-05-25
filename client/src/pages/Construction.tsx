import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Hammer, Menu, X, Send, Youtube, Instagram } from 'lucide-react';

const Construction: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO" },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/hardwallet", label: "HARDWALLET" },
    { href: "/kast", label: "KAST" },
    { href: "/imposto-de-renda", label: "IMPOSTO DE RENDA" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans">
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

              {/* YouTube */}
              <a href="https://www.youtube.com/@investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>

              {/* Instagram */}
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

export default Construction;
