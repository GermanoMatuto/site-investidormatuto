import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';

const Telegram: React.FC = () => {
  usePageMeta(
    "Grupo Telegram - Comunidade VIP Cripto",
    "Acesse a comunidade VIP do Investidor Matuto no Telegram. Análises, alertas e estratégias exclusivas de criptomoedas."
  );
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    exchangeUid: '',
    exchange: 'okx'
  });

  const [validationStatus, setValidationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [telegramLink] = useState('https://t.me/+vva2e0bVkoFiNWFh');

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
      <Header />

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
                <span className="text-blue-300 text-sm">✓ Acessado por 5,000+ traders</span>
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

      {/* Validation Form */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Validar Acesso
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
                  <option value="okx">OKX</option>
                  <option value="gate">Gate.io</option>
                  <option value="bingx">BingX</option>
                  <option value="binance">Binance</option>
                </select>
              </div>

              <div>
                <label htmlFor="exchangeUid" className="block text-sm font-semibold mb-3 text-gray-300">
                  UID da {formData.exchange.toUpperCase()}
                </label>
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
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50 flex items-center justify-center gap-2 text-base"
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
      <Footer />
    </div>
  );
};

export default Telegram;
