import type { Chat, ChatMessage } from '~/types'
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

  const send = async (text: string) => {
    chat.value.messages.push({
      id: genNextId(),
      role: 'user',
      text,
    })

    const data = await $fetch<ChatMessage>('/api/ai', {
      method: 'post',
      body: chat.value,
    })

    chat.value.messages.push(data)
  }

  return {
    chat,
    send,
  }
}
