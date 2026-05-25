import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CreditCard, Globe, Zap, TrendingUp, CheckCircle, Menu, X, Send, Youtube, Instagram } from 'lucide-react';

const Kast: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const affiliateLink = "https://kastfinance.app.link/A0V8F8SU";

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO" },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/hardwallet", label: "HARDWALLET" },
    { href: "/kast", label: "KAST", active: true },
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
                className={`text-sm font-medium transition-colors tracking-wider ${link.active ? 'text-blue-400' : 'text-gray-400 hover:text-blue-400'}`}
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
                  className={`text-lg font-medium transition-colors py-2 border-b border-gray-900 last:border-0 ${link.active ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

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
                href={affiliateLink}
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
            href={affiliateLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 text-xl"
          >
            Abrir Minha Conta Kast
            <ArrowRight size={28} />
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

export default Kast;
