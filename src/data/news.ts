import type { NewsItem } from '@/types/entities'

export const news: NewsItem[] = [
  {
    id: 'news-01',
    title: 'Novo trailer reforça expectativa recorde',
    summary: 'Comunidade reage às novas cenas reveladas com foco no protagonista duplo.',
    category: 'trailer',
    image: '/news/news-01.svg',
    date: '2026-07-02',
  },
  {
    id: 'news-02',
    title: 'Rumor aponta possível nova janela de lançamento',
    summary: 'Fontes não oficiais especulam sobre ajuste de cronograma. Ainda sem confirmação.',
    category: 'rumor',
    image: '/news/news-02.svg',
    date: '2026-07-01',
  },
  {
    id: 'news-03',
    title: 'Conteúdo sobre o mapa bate recorde de visualizações',
    summary: 'Vídeos analisando o tamanho do mapa dominam as tendências da semana.',
    category: 'alta',
    image: '/news/news-03.svg',
    date: '2026-06-29',
  },
  {
    id: 'news-04',
    title: 'Data de pré-venda é comentada em fóruns oficiais',
    summary: 'Publicações sugerem cronograma de pré-venda para as próximas semanas.',
    category: 'data',
    image: '/news/news-04.svg',
    date: '2026-06-27',
  },
  {
    id: 'news-05',
    title: 'Nova arte oficial reacende teorias sobre o vilão principal',
    summary: 'Material promocional traz pistas visuais analisadas por criadores de conteúdo.',
    category: 'noticia',
    image: '/news/news-05.svg',
    date: '2026-06-24',
  },
]
