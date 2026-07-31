/**
 * AiService (stub)
 * -----------------
 * Nesta V1, NENHUM prompt é enviado a uma API de IA — tudo é gerado
 * localmente (ver features/arsenal-ia/prompts/*). Este arquivo existe apenas
 * para deixar o "encaixe" pronto para a V2.0 do roadmap, quando o botão
 * "Copiar Prompt" poderá virar "Gerar" e passar a chamar um provedor real
 * (OpenAI, Claude, Gemini) através de uma API própria — nunca com a chave
 * de API exposta no frontend.
 *
 * generate() atualmente lança erro de propósito: nada no app deve chamar
 * este método na V1.
 */
export const aiService = {
  isEnabled: false as const,

  async generate(_prompt: string): Promise<string> {
    throw new Error(
      'aiService.generate não está disponível na V1. Utilize o botão "Copiar" para usar o prompt gerado localmente.'
    )
  },
}
