export interface VideoPromptGeneratorFields {
  theme: string
  style: string
  format: string
  language: 'pt-BR' | 'en'
}

const SAFE_SUFFIX_EN =
  'Original fictional scene. Without official logos. Without copyrighted characters.'
const SAFE_SUFFIX_PT =
  'Cena original e fictícia. Sem logotipos oficiais. Sem personagens protegidos por direitos autorais.'

export const buildVideoPrompt = ({ theme, style, format, language }: VideoPromptGeneratorFields): string => {
  if (language === 'en') {
    return `Original fictional short video concept inspired by ${theme}, ${style} style, ${format} format, dynamic camera movement, synthwave color grading, cinematic pacing. ${SAFE_SUFFIX_EN}`
  }
  return `Conceito de vídeo curto original e fictício inspirado em "${theme}", estilo ${style}, formato ${format}, movimento de câmera dinâmico, gradação de cor synthwave, ritmo cinematográfico. ${SAFE_SUFFIX_PT}`
}
