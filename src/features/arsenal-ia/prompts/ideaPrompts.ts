// Geradores locais de prompt. Nesta V1 nenhum texto é enviado a uma API de IA:
// o Hub apenas monta, localmente, um prompt profissional pronto para o usuário
// copiar e colar na ferramenta de IA de sua preferência.
//
// Em V2.0 (ver PRD), a mesma função pode ser reaproveitada: ao invés do botão
// "Copiar" chamar apenas o clipboard, ele passará a chamar aiService.generate(prompt).

export interface IdeasGeneratorFields {
  theme: string
  platform: string
  quantity: number
  tone: string
}

export const buildIdeasPrompt = ({ theme, platform, quantity, tone }: IdeasGeneratorFields): string => {
  return `Aja como um estrategista de conteúdo especializado em criadores de vídeos curtos sobre games.
Gere ${quantity} ideias originais de conteúdo sobre o tema "${theme}", otimizadas para ${platform}.
Tom de voz: ${tone}.
Para cada ideia, apresente: título chamativo, breve descrição (2 linhas) e o motivo pelo qual ela tem potencial de viralizar.
Evite citar marcas, personagens ou obras protegidas por direitos autorais — trate o conteúdo como análise, opinião ou material autoral inspirado no tema.`
}

export interface TitlesGeneratorFields {
  theme: string
  quantity: number
  style: string
}

export const buildTitlesPrompt = ({ theme, quantity, style }: TitlesGeneratorFields): string => {
  return `Aja como um copywriter especialista em títulos de alta taxa de clique para conteúdo de games.
Gere ${quantity} opções de título sobre o tema "${theme}", no estilo "${style}".
Cada título deve ter no máximo 70 caracteres, gerar curiosidade e não ser clickbait enganoso.
Não utilize nomes de marcas ou personagens protegidos por direitos autorais.`
}

export interface HashtagsGeneratorFields {
  theme: string
  language: string
  platform: string
}

export const buildHashtagsPrompt = ({ theme, language, platform }: HashtagsGeneratorFields): string => {
  return `Aja como um especialista em SEO para redes sociais.
Gere um conjunto de hashtags no idioma "${language}" para um conteúdo sobre "${theme}", otimizado para ${platform}.
Separe em 3 grupos: hashtags amplas (alto alcance), hashtags de nicho (segmentadas) e hashtags de comunidade (engajamento).
Apresente no total entre 15 e 25 hashtags, sem repetição.`
}

export interface DescriptionsGeneratorFields {
  theme: string
  objective: string
  platform: string
}

export const buildDescriptionsPrompt = ({ theme, objective, platform }: DescriptionsGeneratorFields): string => {
  return `Aja como um redator especializado em descrições para ${platform}.
Escreva uma descrição para um conteúdo sobre "${theme}", com o objetivo de "${objective}".
A descrição deve ter um gancho na primeira linha, contexto breve no corpo e uma chamada para ação natural ao final.
Adapte o tamanho ao padrão da plataforma informada.`
}
