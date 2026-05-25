import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Lock, Zap, Globe, Menu, X, Send, Youtube, Instagram } from 'lucide-react';

const Gate: React.FC = () => {
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
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-8 tracking-tight">
            Gateway to <span className="text-blue-500">Crypto</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            A escolha número um de 49 milhões de negociadores ao redor do mundo. Acesse uma plataforma completa, segura e inovadora.
          </p>

          <a 
            href="https://www.gate.com/share/x1zab1fz" 
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

export default Gate;
