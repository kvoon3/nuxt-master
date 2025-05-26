export interface Chat {
  id: string
  name: string
  messages: ChatMessage[]
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
}
