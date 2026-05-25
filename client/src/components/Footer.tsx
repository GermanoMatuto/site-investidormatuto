import { Send, Youtube, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '@/const';

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 bg-[#0a0a0a] border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Investidor Matuto. Todos os direitos reservados.</p>

          <span className="text-gray-600">|</span>

          <p className="text-gray-400 font-semibold text-sm">Quem vence? Quando você vence.</p>

          <span className="text-gray-600">|</span>

          <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="X">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.67-5.829 6.67H2.422l7.723-8.835L1.254 2.25h6.554l4.882 6.467 5.633-6.467zM17.534 20.766h1.832L6.455 3.812H4.527l13.007 16.954z" />
              </svg>
            </a>
            <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Telegram">
              <Send size={20} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="YouTube">
              <Youtube size={20} />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
