import React, { useState } from 'react';
import { Link } from 'wouter';
import { Send, CheckCircle, AlertCircle, Menu, X, Youtube, Instagram, ExternalLink, PlayCircle } from 'lucide-react';

const Telegram: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    exchangeUid: '',
    exchange: 'bingx'
  });

  const [validationStatus, setValidationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [telegramLink] = useState('https://t.me/+vva2e0bVkoFiNWFh');

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO" },
    { href: "/telegram", label: "TELEGRAM", active: true },
    { href: "/hardwallet", label: "HARDWALLET" },
    { href: "/kast", label: "KAST" },
    { href: "/imposto-de-renda", label: "IMPOSTO DE RENDA" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.exchangeUid.trim()) {
      setValidationStatus('error');
      setMessage('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationStatus('error');
      setMessage('Por favor, insira um email válido.');
      return;
    }

    setValidationStatus('loading');

    setTimeout(() => {
      setValidationStatus('success');
      setMessage('✓ Validação realizada com sucesso! Seu acesso foi confirmado.');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <style>{`
        .telegram-image-container {
          position: relative;
          width: 100%;
          max-width: 400px;
          aspect-ratio: 1;
          margin: 0 auto;
        }
        .telegram-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          -webkit-mask-image: radial-gradient(circle at center, black 0%, black 70%, transparent 100%);
          mask-image: radial-gradient(circle at center, black 0%, black 70%, transparent 100%);
          box-shadow: 0 0 60px rgba(59, 130, 246, 0.3), 0 0 120px rgba(59, 130, 246, 0.1);
        }
      `}</style>

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

      {/* Hero Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-semibold">💬 COMUNIDADE EXCLUSIVA</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-6 tracking-tight">
                Faça Parte do Grupo<br /><span className="text-blue-400">Investidor Matuto</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                Acesse análises exclusivas, oportunidades de mercado em tempo real e uma comunidade de traders focados em criptomoedas.
              </p>

              <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <span className="text-blue-300 text-sm">✓ Acessado por 1,000+ traders</span>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="telegram-image-container">
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663333280465/SyzUMomBqTgjclUA.png" alt="Investidor Matuto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Entrar Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] to-[#111111]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Como entrar no grupo?</h2>
            <p className="text-gray-400 text-lg">É simples e gratuito. Basta seguir os passos abaixo.</p>
          </div>

          {/* Steps */}
          <div className="space-y-5 mb-10">
            {/* Step 1 */}
            <div className="flex gap-5 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Crie sua conta na BingX pelo meu link</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Para ter acesso ao grupo, você precisa ter uma conta na <strong className="text-white">BingX</strong> cadastrada através do meu link de indicação. Ao criar sua conta por esse link, você garante um <span className="text-blue-400 font-semibold">cashback nas taxas pagas à corretora</span> — ou seja, parte das suas taxas de negociação voltam para você.
                </p>
                <a
                  href="https://bingx.com/pt-br/partner/investidormatuto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 text-sm shadow-lg hover:shadow-blue-600/40"
                >
                  Criar conta na BingX
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-5 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="w-full">
                <h3 className="font-bold text-lg mb-1">Encontre seu UID na BingX</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Após criar sua conta, localize seu <strong className="text-white">UID</strong> (número de identificação único) dentro da plataforma da BingX. Você precisará informá-lo no formulário abaixo para validar seu acesso ao grupo.
                </p>

                {/* Área clicável - tutorial UID */}
                <a
                  href="https://bingx.com/pt-br/partner/investidormatuto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-blue-500/50 rounded-lg transition-all duration-200 group"
                >
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <PlayCircle size={18} className="text-blue-400" />
                  </div>
                  <div className="text-left">
                    <span className="text-sm font-semibold text-white block">Não sabe encontrar seu UID?</span>
                    <span className="text-xs text-blue-400">BingX — vídeo tutorial em breve</span>
                  </div>
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors ml-auto" />
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-5 items-start bg-gray-900/50 border border-gray-800 rounded-xl p-6">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-lg mb-1">Preencha o formulário abaixo</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Informe seus dados e o UID da sua conta BingX. Após a validação, você receberá o link de acesso ao grupo exclusivo no Telegram.
                </p>
              </div>
            </div>
          </div>

          {/* Cashback highlight */}
          <div className="bg-gradient-to-r from-blue-600/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-5 flex gap-4 items-start">
            <span className="text-2xl flex-shrink-0">💰</span>
            <div>
              <p className="font-semibold text-white mb-1">Cashback nas taxas da BingX</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ao criar sua conta pelo meu link de indicação, você recebe um <strong className="text-blue-400">cashback nas taxas pagas à corretora</strong>. Isso significa que parte do valor que você paga em cada operação retorna para você automaticamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Form */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Validar seu Acesso
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold mb-3 text-gray-300">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Digite seu nome completo"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-300">
                  Email Principal
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu principal email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div>
                <label htmlFor="exchange" className="block text-sm font-semibold mb-3 text-gray-300">
                  Qual exchange você usa?
                </label>
                <select
                  id="exchange"
                  name="exchange"
                  value={formData.exchange}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="bingx">BingX</option>
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="exchangeUid" className="block text-sm font-semibold text-gray-300">
                    UID da {formData.exchange.toUpperCase()}
                  </label>
                  <a
                    href="https://bingx.com/pt-br/partner/investidormatuto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <PlayCircle size={13} />
                    Não sabe encontrar seu UID? BingX
                  </a>
                </div>
                <input
                  type="text"
                  id="exchangeUid"
                  name="exchangeUid"
                  placeholder={`Digite seu UID da ${formData.exchange.toUpperCase()}`}
                  value={formData.exchangeUid}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              {validationStatus !== 'idle' && (
                <div className={`p-4 rounded-lg border flex items-start gap-3 ${
                  validationStatus === 'success'
                    ? 'bg-green-500/10 border-green-500/30'
                    : validationStatus === 'error'
                    ? 'bg-red-500/10 border-red-500/30'
                    : 'bg-blue-500/10 border-blue-500/30'
                }`}>
                  {validationStatus === 'success' && (
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                  )}
                  {validationStatus === 'error' && (
                    <AlertCircle className="text-red-400 flex-shrink-0 mt-0.5" size={20} />
                  )}
                  {validationStatus === 'loading' && (
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin flex-shrink-0 mt-0.5" />
                  )}
                  <span className={`text-sm ${
                    validationStatus === 'success'
                      ? 'text-green-300'
                      : validationStatus === 'error'
                      ? 'text-red-300'
                      : 'text-blue-300'
                  }`}>
                    {validationStatus === 'loading' ? 'Contactando a Exchange...' : message}
                  </span>
                </div>
              )}

              {validationStatus === 'success' && (
                <div className="mt-6 p-6 bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-lg">
                  <h3 className="text-xl font-bold text-green-300 mb-4">🎉 Bem-vindo à Comunidade!</h3>
                  <p className="text-gray-300 mb-6">Clique no botão abaixo para acessar o grupo exclusivo no Telegram:</p>
                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
                  >
                    📱 Abrir Grupo Telegram
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={validationStatus === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-2 text-lg"
              >
                {validationStatus === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Verificar Indicação
                  </>
                )}
              </button>
            </form>
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

export default Telegram;

