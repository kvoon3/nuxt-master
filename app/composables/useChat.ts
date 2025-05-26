import type { Chat } from '~/types'
import { ref as deepRef } from 'vue'
import { defaultChatMessages } from '~/shared/constants'

export function useChat() {
  const chat = deepRef<Chat>({
    id: '1',
    name: 'Conversation Example',
    messages: defaultChatMessages,
  })

  const genNextId = () => {
    return `${Number(chat.value.messages.at(-1)?.id) + 1}`
  }

  const send = (text: string) => {
    chat.value.messages.push({
      id: genNextId(),
      role: 'user',
      text,
    })

    setTimeout(() => {
      chat.value.messages.push({
        id: genNextId(),
        role: 'assistant',
        text: `you said${text}`,
      })
    }, 500)
  }

  return {
    chat,
    send,
  }
}
