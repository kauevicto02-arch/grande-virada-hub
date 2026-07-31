export interface ImagePromptGeneratorFields {
  theme: string
  style: string
  format: string
  language: 'pt-BR' | 'en'
}

// Regras fixas de segurança de direitos autorais aplicadas a TODO prompt de imagem gerado.
const SAFE_SUFFIX_EN =
  'Original fictional scene. Without official logos. Without copyrighted characters.'
const SAFE_SUFFIX_PT =
  'Cena original e fictícia. Sem logotipos oficiais. Sem personagens protegidos por direitos autorais.'

export const buildImagePrompt = ({ theme, style, format, language }: ImagePromptGeneratorFields): string => {
  if (language === 'en') {
    return `Original fictional scene inspired by ${theme}, ${style} style, ${format} format, cinematic lighting, neon coastal city atmosphere, highly detailed, professional composition. ${SAFE_SUFFIX_EN}`
  }
  return `Cena original e fictícia inspirada em "${theme}", estilo ${style}, formato ${format}, iluminação cinematográfica, atmosfera de cidade costeira neon, altamente detalhada, composição profissional. ${SAFE_SUFFIX_PT}`
}
