import type { GenerateTextOptions } from '@xsai/generate-text'
import { createOllama } from '@xsai-ext/providers-local'
import { generateText } from '@xsai/generate-text'

type Providers = 'open-router' | 'ollama'

export async function genText(
  messages: GenerateTextOptions['messages'],
  provider: Providers = 'open-router',
) {
  const options = provider === 'open-router'
    ? useOpenRouterOptions()
    : useOllamaOptions()

  const { text } = await generateText({
    ...options,
    messages,
  })

  return text
}

export function useOllamaOptions() {
  const ollama = createOllama()

  return ollama.chat('deepseek-r1:1.5b')
}

export function useOpenRouterOptions() {
  const { openRouterApiKey } = useRuntimeConfig()

  return <GenerateTextOptions>{
    baseURL: 'https://openrouter.ai/api/v1/',
    model: 'moonshotai/kimi-vl-a3b-thinking:free',
    apiKey: openRouterApiKey,
  }
}
