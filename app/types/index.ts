import type { GenerateTextOptions } from '@xsai/generate-text'

export interface Chat {
  id: string
  name: string
  messages: ChatMessage[]
}

export type ChatMessage = GenerateTextOptions['messages'][number]
