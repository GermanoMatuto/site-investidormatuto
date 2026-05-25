import React from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Shield, Zap, TrendingUp, Star, MessageSquare, Users, Globe, LayoutGrid, ShieldCheck, PieChart } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';

const Exchanges: React.FC = () => {
  usePageMeta(
    "Exchanges - As Melhores Plataformas de Cripto",
    "Conheça as melhores exchanges de criptomoedas recomendadas pelo Investidor Matuto: OKX, BingX, Gate.io e mais."
  );

  const exchanges = [
    {
      name: "Binance",
      purpose: "Base de Liquidez & Hold",
      description: "A maior corretora do mundo. Ideal para manter sua base de capital principal com a maior segurança e liquidez do mercado.",
      link: "https://accounts.binance.com/register?ref=12345678",
      icon: <Globe className="text-blue-500" size={32} />,
      bonus: "Taxas Reduzidas",
      features: ["Maior Liquidez Global", "P2P Seguro & Rápido", "Validar Grupo VIP Telegram"]
    },
    {
      name: "BingX",
      purpose: "Operacional & Copy Trading",
      description: "A melhor plataforma para o dia a dia. Use para operações de trading e para copiar os melhores traders do mundo automaticamente.",
      link: "https://bingx.com/invite/MATUTO",
      icon: <Zap className="text-blue-500" size={32} />,
      bonus: "Bônus 5,000 USDT",
      features: ["Melhor Copy Trading", "Sem KYC Obrigatório", "Validar Grupo VIP Telegram"]
    },
    {
      name: "Gate.io",
      purpose: "Busca por Gemas & Altcoins",
      description: "Onde as moedas novas aparecem primeiro. Use para encontrar projetos promissores antes que cheguem nas grandes corretoras.",
      link: "https://www.gate.io/signup/1234567",
      icon: <TrendingUp className="text-blue-500" size={32} />,
      bonus: "Acesso Antecipado",
      features: ["1,700+ Ativos Listados", "Startup Launchpad", "Validar Grupo VIP Telegram"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Header />

      {/* Hero Section - Foco em Diversificação */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full">
            <span className="text-blue-400 text-sm font-semibold">🛡️ ESTRATÉGIA DE SEGURANÇA</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-8 tracking-tight">
            Não coloque todos os ovos na <span className="text-blue-500">mesma cesta</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            O investidor profissional não escolhe apenas uma corretora. Ele diversifica seu capital para reduzir riscos e aproveitar o melhor de cada plataforma. Monte seu ecossistema completo abaixo.
          </p>

          {/* Diversificação Info Box */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
              <ShieldCheck className="text-blue-500 mb-4" size={32} />
              <h3 className="font-bold mb-2">Segurança Sistêmica</h3>
              <p className="text-sm text-gray-400">Proteja seu capital contra travamentos, manutenções ou riscos de uma única plataforma.</p>
            </div>
            <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
              <LayoutGrid className="text-blue-500 mb-4" size={32} />
              <h3 className="font-bold mb-2">Ferramentas Diferentes</h3>
              <p className="text-sm text-gray-400">Cada exchange tem uma especialidade: Liquidez, Copy Trading ou Gemas exclusivas.</p>
            </div>
            <div className="p-6 bg-blue-600/5 border border-blue-500/20 rounded-2xl">
              <Star className="text-blue-500 mb-4" size={32} />
              <h3 className="font-bold mb-2">Benefícios VIP</h3>
              <p className="text-sm text-gray-400">Ao diversificar usando nossos links, você garante acesso total ao nosso Grupo VIP no Telegram.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exchanges Grid - Com Propósitos Claros */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {exchanges.map((exchange, index) => (
              <div key={index} className="p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all hover:bg-gray-900/30 flex flex-col h-full group relative overflow-hidden">
                {/* Purpose Badge */}
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-4 py-1 rounded-bl-lg uppercase tracking-widest">
                  {exchange.purpose}
                </div>

                {/* Icon Container */}
                <div className="mb-6 inline-flex p-4 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors w-fit">
                  {exchange.icon}
                </div>
                
                <div className="mb-4">
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">{exchange.bonus}</span>
                  <h3 className="text-3xl font-bold mt-1">{exchange.name}</h3>
                </div>
                
                <p className="text-gray-400 mb-8 leading-relaxed flex-grow">
                  {exchange.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {exchange.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-300">
                      <CheckCircle size={18} className={feature.includes("VIP") ? "text-blue-400" : "text-blue-500"} />
                      <span className={feature.includes("VIP") ? "text-blue-300 font-semibold" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href={exchange.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-600/50"
                >
                  Abrir Conta Agora
                  <ArrowRight size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gestão de Risco Section */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#0d0d0d] border-t border-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="inline-flex p-3 bg-blue-500/10 rounded-lg mb-6">
                  <PieChart className="text-blue-500" size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  Como dividir seu capital?
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  A diversificação inteligente não é apenas ter as contas, mas saber quanto deixar em cada uma. Siga a sugestão do Matuto:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-300"><strong>50% na Binance:</strong> Sua reserva principal e moedas de Hold.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300"><strong>30% na BingX:</strong> Capital para trading ativo e copy trading.</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-12 h-2 bg-blue-200 rounded-full"></div>
                    <span className="text-gray-300"><strong>20% na Gate.io:</strong> Capital de risco para buscar as novas gemas.</span>
                  </li>
                </ul>
              </div>
              <div className="flex-shrink-0 hidden md:block">
                <div className="w-64 h-64 rounded-full border-8 border-blue-600 border-t-blue-400 border-r-blue-200 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl font-bold">100%</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Diversificado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Telegram CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0a0a0a] border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex p-4 bg-blue-500/10 rounded-full mb-8">
            <MessageSquare className="text-blue-500" size={40} />
          </div>
          <h2 className="text-4xl font-bold mb-6 tracking-tight">Complete seu Ecossistema</h2>
          <p className="text-gray-400 text-lg mb-10">
            Após abrir suas contas em cada uma das exchanges acima, valide seu acesso para entrar no Grupo VIP e receber as informações que fazem a diferença.
          </p>
          <Link 
            href="/telegram"
            className="inline-flex items-center gap-2 px-10 py-5 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold rounded-lg transition-all duration-300 text-lg"
          >
            Validar Acesso VIP Telegram
            <Users size={24} />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Exchanges;
