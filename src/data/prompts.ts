import type { PromptItem } from '@/types/entities'

// Biblioteca de prompts prontos (Oficina de Prompts).
// Estes são prompts "de prateleira", diferentes dos gerados dinamicamente
// pelo Arsenal IA a partir de campos preenchidos pelo usuário.

export const promptLibrary: PromptItem[] = [
  {
    id: 'lib-01',
    title: 'Roteiro de TikTok — curiosidade rápida',
    description: 'Estrutura enxuta para vídeos de até 30 segundos sobre curiosidades do jogo.',
    objective: 'Gerar um roteiro curto com gancho forte nos 3 primeiros segundos.',
    language: 'pt-BR',
    category: 'tiktok',
    content:
      'Escreva um roteiro de até 30 segundos para TikTok sobre uma curiosidade do universo GTA 6. Comece com um gancho de impacto nos 3 primeiros segundos, desenvolva a curiosidade em linguagem simples e finalize com uma pergunta que estimule comentários. Não utilize personagens ou marcas oficiais protegidas por direitos autorais — trate o conteúdo como análise e opinião original.',
  },
  {
    id: 'lib-02',
    title: 'Shorts — teoria em 45 segundos',
    description: 'Roteiro estruturado para apresentar uma teoria de forma envolvente.',
    objective: 'Prender atenção do início ao fim com uma teoria bem construída.',
    language: 'pt-BR',
    category: 'shorts',
    content:
      'Crie um roteiro de 45 segundos para YouTube Shorts apresentando uma teoria sobre a trama do jogo. Estruture em: gancho, evidências, conclusão especulativa e call-to-action pedindo a opinião do espectador nos comentários. Mantenha tom especulativo e evite afirmar como fato oficial.',
  },
  {
    id: 'lib-03',
    title: 'Vídeo longo de YouTube — análise completa',
    description: 'Roteiro estruturado em blocos para vídeos de 8 a 12 minutos.',
    objective: 'Organizar uma análise aprofundada mantendo retenção alta.',
    language: 'pt-BR',
    category: 'youtube',
    content:
      'Estruture um roteiro de vídeo de YouTube de 8 a 12 minutos analisando um tema específico do universo do jogo, dividido em: introdução com gancho, contexto, 3 pontos principais de análise, contraponto/teoria alternativa e conclusão com CTA de inscrição. Escreva em tom analítico e envolvente, sem citar diretamente falas protegidas por direitos autorais.',
  },
  {
    id: 'lib-04',
    title: 'Legenda para Instagram com CTA',
    description: 'Legenda persuasiva pronta para acompanhar um Reel ou carrossel.',
    objective: 'Aumentar engajamento e comentários no post.',
    language: 'pt-BR',
    category: 'instagram',
    content:
      'Escreva uma legenda para Instagram sobre uma novidade do universo do jogo, com até 4 linhas, tom próximo e uma pergunta final que incentive comentários. Adicione sugestão de 5 hashtags relevantes ao final.',
  },
  {
    id: 'lib-05',
    title: 'Prompt de imagem — cena cinematográfica original',
    description: 'Gera descrição visual profissional para arte promocional autoral.',
    objective: 'Produzir uma imagem de alto impacto visual sem violar direitos autorais.',
    language: 'en',
    category: 'imagens',
    content:
      'Original fictional scene inspired by a neon coastal city at night, cinematic lighting, vibrant pink and cyan palette, wide-angle composition, highly detailed, professional concept art style. Without official logos. Without copyrighted characters.',
  },
  {
    id: 'lib-06',
    title: 'Prompt de vídeo — trailer conceitual original',
    description: 'Descrição para geração de vídeo curto com estética synthwave.',
    objective: 'Produzir clipe conceitual original para uso promocional.',
    language: 'en',
    category: 'videos',
    content:
      'Original fictional short trailer concept inspired by a neon coastal city, dynamic camera movement, synthwave color grading in pink and cyan, cinematic pacing. Without official logos. Without copyrighted characters.',
  },
  {
    id: 'lib-07',
    title: 'Thumbnail chamativa',
    description: 'Direcionamento visual para thumbnail de alta taxa de clique.',
    objective: 'Maximizar CTR sem apelar para clickbait enganoso.',
    language: 'pt-BR',
    category: 'thumbnail',
    content:
      'Descreva uma thumbnail para YouTube com alto contraste, expressão facial exagerada (sem usar rosto de pessoa real ou personagem protegido), texto curto de até 4 palavras em destaque, e elemento visual central relacionado ao tema do vídeo.',
  },
  {
    id: 'lib-08',
    title: 'Storytelling — abertura envolvente',
    description: 'Técnica narrativa para prender o espectador nos primeiros segundos.',
    objective: 'Criar abertura no formato de mini-história.',
    language: 'pt-BR',
    category: 'storytelling',
    content:
      'Escreva a abertura de um vídeo em formato de mini-história de 3 frases, criando tensão e curiosidade sobre o tema, sem revelar o desfecho, terminando com uma frase de suspense que leve ao restante do conteúdo.',
  },
  {
    id: 'lib-09',
    title: 'Gancho de 3 segundos',
    description: 'Frase de abertura otimizada para retenção em vídeos curtos.',
    objective: 'Reduzir taxa de abandono nos primeiros segundos.',
    language: 'pt-BR',
    category: 'gancho',
    content:
      'Gere 5 opções de frase de abertura (gancho) de até 12 palavras cada, para prender atenção nos 3 primeiros segundos de um vídeo curto sobre o tema informado. Use tom direto e curioso.',
  },
  {
    id: 'lib-10',
    title: 'CTA de engajamento',
    description: 'Chamada para ação otimizada para comentários e compartilhamentos.',
    objective: 'Aumentar interação ao final do conteúdo.',
    language: 'pt-BR',
    category: 'cta',
    content:
      'Gere 3 opções de call-to-action para o final de um vídeo, incentivando comentários, compartilhamento ou inscrição, em tom natural e não forçado.',
  },
]
