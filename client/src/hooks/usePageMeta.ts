import { useEffect } from 'react';

const DEFAULT_TITLE = 'Investidor Matuto - Aprenda a Investir em Criptomoedas';
const DEFAULT_DESC = 'Aprenda a investir em criptomoedas com Erivelton Germano, o Investidor Matuto. Tutoriais, exchanges, mentoria e comunidade.';

export function usePageMeta(title: string, description: string = DEFAULT_DESC) {
  useEffect(() => {
    document.title = `${title} | Investidor Matuto`;

    const setMeta = (selector: string, content: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', `${title} | Investidor Matuto`);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', `${title} | Investidor Matuto`);
    setMeta('meta[name="twitter:description"]', description);

    return () => {
      document.title = DEFAULT_TITLE;
      setMeta('meta[name="description"]', DEFAULT_DESC);
      setMeta('meta[property="og:title"]', DEFAULT_TITLE);
      setMeta('meta[property="og:description"]', DEFAULT_DESC);
      setMeta('meta[name="twitter:title"]', DEFAULT_TITLE);
      setMeta('meta[name="twitter:description"]', DEFAULT_DESC);
    };
  }, [title, description]);
}
