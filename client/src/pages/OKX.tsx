import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, DollarSign, Shield, Zap, Globe, TrendingUp, Play, Menu, X, Send, Youtube, Instagram } from 'lucide-react';

const OKX: React.FC = () => {
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
                className={`text-sm font-medium transition-colors tracking-wider ${'text-gray-400 hover:text-blue-400'}`}
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
                  className={`text-lg font-medium transition-colors py-2 border-b border-gray-900 last:border-0 ${'text-gray-300 hover:text-blue-400'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-0 items-center">
            <div className="md:pr-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-8 tracking-tight">
                Conta em Dólares <span className="text-blue-400">Sem IOF</span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed">
                Abra sua conta na OKX e tenha acesso a uma plataforma global de criptomoedas com a vantagem de operar em dólares digitais sem taxas de IOF.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.okx.com/pt-br/join?channelid=40833276" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Abrir Conta Agora
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="#tutorial"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-white font-semibold rounded-lg transition-colors"
                >
                  Ver Tutorial
                  <Play size={20} />
                </a>
              </div>
            </div>

            <div className="hidden md:flex justify-end items-center relative">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <DollarSign className="text-blue-500" size={32} />
                      <div>
                        <p className="text-gray-400 text-sm">Saldo em Dólares</p>
                        <p className="text-2xl font-bold">$10,000.00</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-800 pt-6">
                      <p className="text-gray-400 text-sm mb-3">Sem IOF • Sem Taxas Escondidas</p>
                      <div className="flex gap-2">
                        <div className="flex-1 h-2 bg-blue-500 rounded-full"></div>
                        <div className="flex-1 h-2 bg-gray-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Por que Escolher OKX?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Descubra as vantagens de uma plataforma global focada em dólares digitais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
              <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <DollarSign className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Sem IOF</h3>
              <p className="text-gray-400 leading-relaxed">
                Envie e receba dólares digitais sem a taxa de Imposto sobre Operações Financeiras, economizando significativamente em suas transações.
              </p>
            </div>

            <div className="group p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
              <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Globe className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Plataforma Global</h3>
              <p className="text-gray-400 leading-relaxed">
                Acesso a uma das maiores exchanges de criptomoedas do mundo com suporte em português e interface intuitiva.
              </p>
            </div>

            <div className="group p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
              <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Shield className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Segurança</h3>
              <p className="text-gray-400 leading-relaxed">
                Plataforma regulamentada com múltiplas camadas de segurança para proteger seus ativos digitais.
              </p>
            </div>

            <div className="group p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
              <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Zap className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Transações Rápidas</h3>
              <p className="text-gray-400 leading-relaxed">
                Compre e venda criptomoedas em segundos com PIX, conversão rápida e sem slippage.
              </p>
            </div>

            <div className="group p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
              <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <TrendingUp className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Múltiplos Produtos</h3>
              <p className="text-gray-400 leading-relaxed">
                Trading, Earn, P2P, Bots de trading e muito mais. Tudo que você precisa em um só lugar.
              </p>
            </div>

            <div className="group p-8 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/50">
              <div className="mb-6 inline-flex p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <Play className="text-blue-500" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Suporte Completo</h3>
              <p className="text-gray-400 leading-relaxed">
                Tutoriais em português, centro de ajuda e comunidade ativa para auxiliar em cada passo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Como Funciona
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Abra sua conta em 3 passos simples
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Cadastro Rápido</h3>
                <p className="text-gray-400 leading-relaxed">
                  Clique no botão abaixo e preencha seus dados. Leva menos de 5 minutos para criar sua conta.
                </p>
              </div>
              <div className="hidden md:block absolute top-24 right-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Verificação</h3>
                <p className="text-gray-400 leading-relaxed">
                  Complete a verificação de identidade com documentos. Processo seguro e rápido.
                </p>
              </div>
              <div className="hidden md:block absolute top-24 right-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-2xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Primeiro Depósito</h3>
                <p className="text-gray-400 leading-relaxed">
                  Faça seu primeiro depósito via PIX e comece a operar em dólares digitais imediatamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorial Section */}
      <section id="tutorial" className="py-20 md:py-28 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">Tutorial Completo</h2>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/hfu3uLw679I" 
              title="OKX Tutorial" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-12">
            <a 
              href="https://www.okx.com/pt-br/join?channelid=40833276" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 text-xl"
            >
              Abrir Conta na OKX Agora
              <ArrowRight size={28} />
            </a>
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

export default OKX;
