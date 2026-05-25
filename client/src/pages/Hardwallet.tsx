import React, { useState } from 'react';
import { Link } from 'wouter';
import {
  ArrowRight, Shield, Zap, Lock, Menu, X, Send, Youtube, Instagram,
  CheckCircle2, AlertCircle, Info, Smartphone, Bluetooth,
  Fingerprint, Eye, RefreshCcw, ShieldCheck, Cpu, TrendingUp
} from 'lucide-react';

const Hardwallet: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/mentoria", label: "MENTORIA" },
    { href: "/curso", label: "CURSO" },
    { href: "/telegram", label: "TELEGRAM" },
    { href: "/hardwallet", label: "HARDWALLET", active: true },
    { href: "/kast", label: "KAST" },
    { href: "/imposto-de-renda", label: "IMPOSTO DE RENDA" },
  ];

  const faqs = [
    {
      q: "Qual é a diferença real entre os modelos?",
      a: "Todos têm o mesmo chip de segurança (EAL 6+). A diferença está na tela e conectividade. A Classic 1S é perfeita para 99% dos casos. O Pro é para quem quer máximo conforto com tela grande."
    },
    {
      q: "A Classic 1S é realmente segura?",
      a: "Sim! Tem o mesmo chip de segurança militar (EAL 6+) que o Pro. Suas chaves privadas nunca saem do dispositivo. É tão segura quanto qualquer outra carteira OneKey."
    },
    {
      q: "O que acontece se eu perder minha Hardwallet?",
      a: "Não se preocupe! Seus fundos não ficam dentro do dispositivo, mas na blockchain. Use sua 'Seed Phrase' (12 ou 24 palavras) em uma nova carteira para recuperar tudo."
    },
    {
      q: "Por que não deixar minhas criptos na Exchange?",
      a: "Exchanges são alvos de hackers. Com uma Hardwallet, VOCÊ é o seu próprio banco. 'Not your keys, not your coins'."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-blue-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity">
            INVESTIDOR MATUTO
          </Link>
          <nav className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors tracking-wider ${link.active ? 'text-blue-400' : 'text-gray-400 hover:text-blue-400'}`}>
                {link.label}
              </Link>
            ))}
          </nav>
          <button className="lg:hidden p-2 text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-gray-800 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={`text-lg font-medium py-2 border-b border-gray-900 last:border-0 ${link.active ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'}`}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10"></div>
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
            <ShieldCheck size={16} />
            Revendedor Oficial OneKey no Brasil
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Autocustódia Simples <br /> e Segura
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Proteja seu patrimônio com a tecnologia mais confiável do mundo. Sem complicações. Sem taxas. Apenas você e suas criptos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://prohash.com.br/" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
              COMEÇAR AGORA <ArrowRight size={20} />
            </a>
            <a href="#modelos" className="px-10 py-5 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-bold rounded-xl transition-all">
              VER MODELOS
            </a>
          </div>
        </div>
      </section>

      {/* Por que Hardwallet */}
      <section className="py-20 bg-[#0d0d0d] border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Lock className="text-blue-500" />, title: "Suas Chaves", desc: "Você controla suas criptos, não uma exchange." },
            { icon: <Shield className="text-blue-500" />, title: "Segurança Máxima", desc: "Chip EAL 6+ (padrão militar) em todos os modelos." },
            { icon: <Eye className="text-blue-500" />, title: "Código Aberto", desc: "100% auditável. Sem segredos. Sem surpresas." }
          ].map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-900/30 border border-gray-800/50 text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Destaque Classic 1S */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/5 border border-blue-500/30 rounded-3xl p-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 text-sm font-bold mb-6">
            <TrendingUp size={16} />
            A MELHOR RELAÇÃO CUSTO-BENEFÍCIO
          </div>
          <h2 className="text-4xl font-bold mb-6">OneKey Classic 1S: O Padrão Ouro</h2>
          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            <strong>Não precisa de mais que isso.</strong> A Classic 1S tem o <strong>mesmo chip de segurança (EAL 6+)</strong> que o Pro. Suas chaves privadas são protegidas da mesma forma. A única diferença é que não tem uma tela gigante e colorida.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <CheckCircle2 className="text-green-500 mx-auto mb-3" size={32} />
              <p className="font-bold mb-2">Segurança Idêntica</p>
              <p className="text-sm text-gray-400">Mesmo chip EAL 6+ do Pro</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <CheckCircle2 className="text-green-500 mx-auto mb-3" size={32} />
              <p className="font-bold mb-2">Preço Acessível</p>
              <p className="text-sm text-gray-400">R$ 897 vs R$ 2.697 do Pro</p>
            </div>
            <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <CheckCircle2 className="text-green-500 mx-auto mb-3" size={32} />
              <p className="font-bold mb-2">Tudo que Você Precisa</p>
              <p className="text-sm text-gray-400">Bluetooth + USB-C</p>
            </div>
          </div>
          <a href="https://prohash.com.br/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all">
            COMPRAR CLASSIC 1S AGORA <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Modelos Simples */}
      <section id="modelos" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Escolha Sua OneKey</h2>
          <p className="text-gray-400">Todos com a mesma segurança. Escolha o que faz mais sentido para você.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Classic 1S Pure */}
          <div className="group bg-gray-900/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col">
            <div className="h-72 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]"></div>
              <img src="/onekey_touch.webp" alt="OneKey Classic 1S Pure" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Classic 1S Pure</h3>
              <p className="text-blue-400 font-bold mb-4">R$ 747</p>
              <p className="text-gray-400 text-sm mb-6 flex-grow">Para quem quer o máximo em simplicidade. Sem bateria, apenas USB-C. Perfeito para HODLers.</p>
              <a href="https://prohash.com.br/" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-gray-800 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors text-center">COMPRAR</a>
            </div>
          </div>

          {/* Classic 1S - Destaque */}
          <div className="group bg-gradient-to-b from-blue-900/20 to-gray-900/40 border-2 border-blue-500/50 rounded-3xl overflow-hidden scale-105 shadow-2xl z-10 flex flex-col">
            <div className="bg-blue-600 text-white text-xs font-black py-2 text-center uppercase tracking-widest">RECOMENDADO</div>
            <div className="h-72 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]"></div>
              <img src="/onekey_classic.webp" alt="OneKey Classic 1S" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2">Classic 1S</h3>
              <p className="text-blue-400 font-bold mb-4">R$ 897</p>
              <p className="text-gray-400 text-sm mb-6 flex-grow">A escolha inteligente. Tela pequena, bateria interna, Bluetooth. Tudo que você precisa para autocustódia segura.</p>
              <a href="https://prohash.com.br/" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors text-center shadow-lg shadow-blue-900/40">COMPRAR CLASSIC 1S</a>
            </div>
          </div>

          {/* Pro */}
          <div className="group bg-gray-900/40 border border-gray-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all flex flex-col">
            <div className="h-72 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]"></div>
              <img src="/onekey_pro.webp" alt="OneKey Pro" className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2">OneKey Pro</h3>
              <p className="text-blue-400 font-bold mb-4">R$ 2.697</p>
              <p className="text-gray-400 text-sm mb-6 flex-grow">Para quem quer o máximo em conforto. Tela grande colorida, biometria e transações via QR Code (Air-gapped).</p>
              <a href="https://prohash.com.br/" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-gray-800 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors text-center">COMPRAR PRO</a>
            </div>
          </div>
        </div>
      </section>

      {/* Cupons ProHash */}
      <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
        <a
          href="https://protegecoin.com.br/matuto"
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative overflow-hidden rounded-3xl border border-yellow-500/30 hover:border-yellow-400/60 transition-all duration-300 hover:shadow-[0_0_60px_rgba(234,179,8,0.12)]">
            {/* Fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1200] via-[#110d00] to-[#0a0a0a]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(234,179,8,0.10)_0%,_transparent_60%)]"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent"></div>

            <div className="relative z-10 p-8 md:p-10">
              {/* Cabeçalho */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-yellow-500/20 border border-yellow-500/40">
                  <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-yellow-400/70 text-xs font-bold uppercase tracking-widest">Cupons Exclusivos</p>
                  <h2 className="text-xl font-black text-white leading-tight">ProHash</h2>
                </div>
                <div className="ml-auto hidden md:flex items-center gap-2 px-5 py-2.5 bg-yellow-500 hover:bg-yellow-400 text-black font-black rounded-xl transition-all group-hover:scale-105 transform text-sm">
                  ACESSAR LOJA
                  <ArrowRight size={16} />
                </div>
              </div>

              {/* Cupons */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Cupom 1 */}
                <div className="relative overflow-hidden rounded-2xl bg-black/30 border border-yellow-500/20 p-5 hover:border-yellow-400/40 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Qualquer forma de pagamento</p>
                  <p className="text-3xl font-black text-yellow-400 mb-3">5% OFF</p>
                  <div className="flex items-center justify-between bg-yellow-500/10 border border-yellow-500/25 rounded-lg px-4 py-2.5">
                    <span className="font-mono font-black text-yellow-300 tracking-widest text-sm">MATUTO</span>
                    <svg className="w-4 h-4 text-yellow-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                {/* Cupom 2 */}
                <div className="relative overflow-hidden rounded-2xl bg-black/30 border border-yellow-500/20 p-5 hover:border-yellow-400/40 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Pagamento em criptomoedas</p>
                  <p className="text-3xl font-black text-yellow-400 mb-3">20% OFF</p>
                  <div className="flex items-center justify-between bg-yellow-500/10 border border-yellow-500/25 rounded-lg px-4 py-2.5">
                    <span className="font-mono font-black text-yellow-300 tracking-widest text-sm">MATUTOCRIPTO20</span>
                    <svg className="w-4 h-4 text-yellow-500/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Botão mobile */}
              <div className="mt-5 md:hidden">
                <div className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-black rounded-xl transition-all text-sm">
                  ACESSAR LOJA <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </div>
        </a>
      </section>

      {/* Comparativo Simples */}
      <section className="py-20 bg-[#080808] border-y border-gray-900 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Comparativo Rápido</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="p-4 text-gray-400 font-medium border-b border-gray-800">Recurso</th>
                  <th className="p-4 text-white font-bold border-b border-gray-800 text-center">Pure</th>
                  <th className="p-4 text-blue-400 font-bold border-b border-gray-800 text-center">Classic 1S</th>
                  <th className="p-4 text-white font-bold border-b border-gray-800 text-center">Pro</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-white/5">
                  <td className="p-4 border-b border-gray-800 text-sm font-medium">Segurança (Chip)</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center">EAL 6+</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center text-blue-400 font-bold">EAL 6+</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center">EAL 6+</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 border-b border-gray-800 text-sm font-medium">Tela</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center">Não</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center text-blue-400 font-bold">Pequena</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center">Grande Colorida</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 border-b border-gray-800 text-sm font-medium">Conexão</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center">USB-C</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center text-blue-400 font-bold">USB + BT</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center">USB + BT + QR</td>
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="p-4 border-b border-gray-800 text-sm font-medium">Preço</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center">R$ 747</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center text-blue-400 font-bold">R$ 897</td>
                  <td className="p-4 border-b border-gray-800 text-sm text-center">R$ 2.697</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-500/10 rounded-xl">
            <Info className="text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold">Dúvidas Frequentes</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-2xl bg-gray-900/20 border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-lg font-bold mb-3 text-blue-400">{faq.q}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-black border-t border-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <p className="text-gray-500 text-sm">&copy; 2026 Investidor Matuto. Todos os direitos reservados.</p>
            <span className="hidden md:inline text-gray-800">|</span>
            <p className="text-gray-400 font-bold text-sm uppercase tracking-widest">Quem vence? Quando você vence.</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com/invest_matuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.67-5.829 6.67H2.422l7.723-8.835L1.254 2.25h6.554l4.882 6.467 5.633-6.467zM17.534 20.766h1.832L6.455 3.812H4.527l13.007 16.954z"/></svg>
            </a>
            <a href="https://www.youtube.com/@investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            <a href="https://www.instagram.com/investidormatuto/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              {/* Binance Square */}
              <a href="https://app.binance.com/uni-qr/cpro/investidormatuto" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors" title="Binance Square">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L7.31 4.69 9.88 7.25 12 5.13l2.12 2.12 2.57-2.56L12 0zM4.69 7.31L0 12l4.69 4.69 2.56-2.57L5.13 12l2.12-2.12-2.56-2.57zM19.31 7.31l-2.56 2.57L18.87 12l-2.12 2.12 2.56 2.57L24 12l-4.69-4.69zM9.88 9.88L7.31 12.44 9.88 15l2.12-2.12L14.12 15l2.57-2.56L14.12 9.88 12 12 9.88 9.88zM7.31 16.75L9.88 19.31 12 17.19l2.12 2.12 2.57-2.56L12 12.31l-4.69 4.44zM12 18.87l-2.12 2.12-2.57-2.56L12 24l4.69-4.69-2.57-2.56L12 18.87z"/></svg>
              </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hardwallet;
