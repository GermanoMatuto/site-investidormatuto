import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Lock, Zap, Globe, Menu, X, Send, Youtube, Instagram } from 'lucide-react';

const Gate: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO" },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/okx", label: "OKX" },
    { href: "/exchanges", label: "EXCHANGES" },
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
              
              {/* Telegram */}
              <a href="https://t.me/+vva2e0bVkoFiNWFh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Telegram">
                <Send size={20} />
              </a>
              
              {/* Facebook */}
              <a href="https://www.facebook.com/investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              
              {/* YouTube */}
              <a href="https://www.youtube.com/@investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>
              
              {/* Instagram */}
              <a href="https://www.instagram.com/investidormatuto/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gate;
