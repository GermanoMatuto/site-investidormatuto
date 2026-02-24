import React, { useState } from 'react';
import { Link } from 'wouter';
import { Shield, Zap, FileText, AlertTriangle, CheckCircle, Calendar, ArrowRight, Menu, X, Send, Youtube, Instagram, Users } from 'lucide-react';

const DeclareCripto: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO" },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/okx", label: "OKX" },
    { href: "/exchanges", label: "EXCHANGES" },
    { href: "/kast", label: "KAST" },
    { href: "/imposto-de-renda", label: "IMPOSTO DE RENDA", active: true },
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

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 text-sm font-semibold">⚖️ PARCERIA DECLARE CRIPTO</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-8 tracking-tight">
            Declare suas Criptos <span className="text-blue-500">Sem Dor de Cabeça</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto">
            Fique em dia com o Leão e evite multas. Use a plataforma líder em conformidade fiscal para investidores de criptoativos no Brasil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#cadastro"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
            >
              Regularizar Agora
              <ArrowRight size={20} />
            </a>
            <a 
              href="https://declarecripto.com.br/parceiro/InvestidorMatuto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-white font-bold rounded-lg transition-all"
            >
              Conhecer a Plataforma
            </a>
          </div>
        </div>
      </section>

      {/* Cadastro Section (Opção 2 - Personalizada) */}
      <section id="cadastro" className="py-20 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Faça sua Cotação Grátis</h2>
              <p className="text-gray-400">Preencha os dados abaixo para receber um orçamento personalizado da Declare Cripto.</p>
            </div>
            
            <form 
              action="https://lps.declarecripto.com.br/imposto_de_renda_cripto_2026/" 
              method="POST"
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Nome Completo</label>
                <input 
                  type="text" 
                  name="field_zGA39791S9z2agj2z181GQ" 
                  required 
                  placeholder="Seu nome"
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">E-mail Principal</label>
                <input 
                  type="email" 
                  name="field_zGA39791S9z2agj2z181GQ_email" 
                  required 
                  placeholder="seu@email.com"
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-medium text-gray-400">WhatsApp (com DDD)</label>
                <input 
                  type="tel" 
                  name="field_zGA39791S9z2agj2z181GQ_phone" 
                  required 
                  placeholder="(00) 00000-0000"
                  className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <button 
                type="submit"
                className="md:col-span-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-blue-600/50 text-lg"
              >
                Quero cotar grátis!
              </button>
            </form>
            <p className="text-center text-xs text-gray-500 mt-6">
              Seus dados serão enviados com segurança para a equipe da Declare Cripto.
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/20 hover:border-blue-500/50 transition-all group">
              <Shield className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4">Segurança Total</h3>
              <p className="text-gray-400 leading-relaxed">Cálculos precisos baseados nas normas da Receita Federal, garantindo que você não pague nem um centavo a mais ou a menos.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/20 hover:border-blue-500/50 transition-all group">
              <Zap className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4">Dashboards Profissionais</h3>
              <p className="text-gray-400 leading-relaxed">Visualize seu patrimônio, lucros e prejuízos em tempo real com integração direta com as principais exchanges.</p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/20 hover:border-blue-500/50 transition-all group">
              <FileText className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-xl font-bold mb-4">Documentação Completa</h3>
              <p className="text-gray-400 leading-relaxed">Geração automática de DARFs, relatórios auxiliares para o GCAP e declaração anual simplificada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Cruciais Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0d0d0d] border-t border-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-left">Por que Declarar Criptoativos é Crucial em 2026?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/40">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="text-blue-500" size={32} />
                <h3 className="text-2xl font-bold">Os Riscos de Não Declarar <span className="text-blue-400">(e as Novas Regras do DeCripto)</span></h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A Receita Federal agora possui o sistema <strong className="text-blue-400">DeCripto</strong> (IN 2291/2025), que obriga as exchanges nacionais e estrangeiras a reportarem movimentações. O cruzamento de dados está mais rigoroso do que nunca.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span>Multas que podem chegar a 75% do valor omitido.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span>Risco de CPF bloqueado ou "Malha Fina".</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span>Dificuldade em comprovar origem de fundos para compras de bens.</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-gray-800 bg-gray-900/40">
              <div className="flex items-center gap-4 mb-6">
                <Users className="text-blue-500" size={32} />
                <h3 className="text-2xl font-bold">Quem Deve Declarar e Pagar Imposto em 2026?</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                A regra básica continua: se você movimentou mais de R$ 30.000,00 em um mês, o <strong className="text-blue-400">Reporte Mensal</strong> é obrigatório. Para vendas com lucro, a isenção de R$ 35.000,00 ainda se aplica a algumas categorias.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span>Investidores com saldo superior a R$ 5.000,00 em cripto.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span>Quem realizou permutas (troca de uma cripto por outra).</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span>Recebimento de Staking, Airdrops ou Yield Farming.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cronograma Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cronograma de Implementação 2026</h2>
            <p className="text-gray-400">Fique atento às datas importantes para a conformidade com o DeCripto.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/20 text-center">
              <Calendar className="text-blue-500 mx-auto mb-4" size={32} />
              <h4 className="font-bold text-blue-400 mb-2">Janeiro 2026</h4>
              <p className="text-sm text-gray-400">Início da obrigatoriedade do reporte via DeCripto para exchanges.</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/20 text-center">
              <Calendar className="text-blue-500 mx-auto mb-4" size={32} />
              <h4 className="font-bold text-blue-400 mb-2">Março 2026</h4>
              <p className="text-sm text-gray-400">Abertura do prazo para a Declaração de Ajuste Anual (DIRPF).</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/20 text-center">
              <Calendar className="text-blue-500 mx-auto mb-4" size={32} />
              <h4 className="font-bold text-blue-400 mb-2">Maio 2026</h4>
              <p className="text-sm text-gray-400">Prazo final para entrega da declaração sem multas por atraso.</p>
            </div>
            <div className="p-6 rounded-xl border border-gray-800 bg-gray-900/20 text-center">
              <Calendar className="text-blue-500 mx-auto mb-4" size={32} />
              <h4 className="font-bold text-blue-400 mb-2">Mensalmente</h4>
              <p className="text-sm text-gray-400">Reporte de operações acima de R$ 30k para exchanges estrangeiras.</p>
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

export default DeclareCripto;
