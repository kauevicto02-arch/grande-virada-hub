export interface ScriptGeneratorFields {
  theme: string
  duration: string
  socialNetwork: string
  tone: string
  objective: string
}

export const buildScriptPrompt = ({
  theme,
  duration,
  socialNetwork,
  tone,
  objective,
}: ScriptGeneratorFields): string => {
  return `Aja como um roteirista sênior especializado em vídeos de games para ${socialNetwork}.
Escreva um roteiro completo sobre o tema "${theme}", com duração aproximada de ${duration}.
Tom de voz: ${tone}. Objetivo do vídeo: ${objective}.

Estruture o roteiro em:
1. Gancho (primeiros segundos, deve prender a atenção imediatamente)
2. Desenvolvimento (contexto e informação principal)
3. Virada ou clímax (o ponto mais interessante do conteúdo)
4. Call-to-action final (natural, sem soar forçado)

Evite citar diretamente falas, marcas ou personagens protegidos por direitos autorais — trate o conteúdo como análise e opinião original.`
}
