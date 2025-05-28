import type { Chat } from '~/types'
import { ref as deepRef } from 'vue'

export function useChat() {
  const chat = deepRef<Chat>({
    id: '1',
    name: 'Conversation Example',
    messages: [],
  })

  const send = async (content: string) => {
    chat.value.messages.push({
      role: 'user',
      content,
    })

    try {
      const text = await $fetch('/api/ai', {
        method: 'post',
        body: chat.value,
      })
      if (text) {
        chat.value.messages.push({
          role: 'assistant',
          content: text,
        })
      }
    }
    catch (error) {
      console.error('error', error)
    }
  }

  return {
    chat,
    send,
  }
}
