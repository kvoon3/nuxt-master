import type { GenerateTextOptions } from '@xsai/generate-text'
import { createOllama } from '@xsai-ext/providers-local'
import { generateText } from '@xsai/generate-text'

export async function genText(messages: GenerateTextOptions['messages']) {
  const ollama = createOllama()
  const { text } = await generateText({
    ...ollama.chat('deepseek-r1:1.5b'),
    messages,
  })

  return text
}
