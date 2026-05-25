import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Zap, Globe, Copy, Lock, Award, TrendingUp, Menu, X, Send, Youtube, Instagram } from 'lucide-react';

const BingX: React.FC = () => {
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
              href="https://bingx.com/invite/ZTNOZC" 
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

      {/* Tutorial UID */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0d0d0d] border-t border-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-500 uppercase tracking-[0.3em] text-xs font-semibold mb-4">Tutorial</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Localizar seu UID na BingX</h2>
          <p className="text-gray-400 mb-10">
            Vídeo rápido mostrando exatamente onde encontrar seu UID — necessário para participar da comunidade e validar seu cadastro.
          </p>
          <a
            href="https://youtube.com/shorts/82gfKME8fZI"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mx-auto block rounded-2xl overflow-hidden border border-gray-800 shadow-2xl group"
            style={{ aspectRatio: '9/16', maxWidth: '360px' }}
          >
            <img
              src="https://i.ytimg.com/vi/82gfKME8fZI/hqdefault.jpg"
              alt="Como localizar seu UID na BingX"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white text-sm font-semibold">Assistir no YouTube</p>
            </div>
          </a>
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

export default BingX;
