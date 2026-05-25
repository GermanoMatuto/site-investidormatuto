import React, { useState } from 'react';
import { Link } from 'wouter';
import { Shield, Zap, FileText, AlertTriangle, CheckCircle, Calendar, ArrowRight, Menu, X, Send, Youtube, Instagram, Users } from 'lucide-react';

const DeclareCripto: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO" },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/hardwallet", label: "HARDWALLET" },
    { href: "/kast", label: "KAST" },
    { href: "/imposto-de-renda", label: "IMPOSTO DE RENDA", active: true },
  ];

  const partnerLink = "https://declarecripto.com.br/parceiro/InvestidorMatuto";

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
              href={partnerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
            >
              Regularizar Agora
              <ArrowRight size={20} />
            </a>
            <a 
              href={partnerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-white font-bold rounded-lg transition-all"
            >
              Conhecer a Plataforma
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section (Substituindo o antigo formulário) */}
      <section id="cadastro" className="py-20 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/30 border border-gray-800 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Clique no botão abaixo para ser redirecionado à plataforma oficial da Declare Cripto e garantir seu atendimento personalizado.
            </p>
            
            <a 
              href={partnerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-blue-600/50 text-xl"
            >
              Ir para Declare Cripto
              <ArrowRight size={24} />
            </a>
            
            <p className="text-xs text-gray-500 mt-8">
              Você será redirecionado para um ambiente seguro e criptografado.
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
                  <span>Vendas acima de R$ 35k/mês com lucro.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span>Posse de criptoativos acima de R$ 5.000,00.</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={18} className="text-blue-500" />
                  <span>Operações em corretoras estrangeiras (Offshore).</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Calendar className="text-blue-500" size={40} />
              <div>
                <h4 className="text-xl font-bold">Prazo DIRPF 2026</h4>
                <p className="text-gray-400">Abertura do prazo para a Declaração de Ajuste Anual (DIRPF).</p>
              </div>
            </div>
            <a 
              href={partnerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all"
            >
              Agendar Diagnóstico
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
              <a href="https://youtube.com/@investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>
              
              {/* Instagram */}
              <a href="https://instagram.com/investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
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

export default DeclareCripto;
