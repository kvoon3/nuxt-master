import type { Chat } from '~/types'
import { ref as deepRef } from 'vue'

export function useChat() {
  const toast = useToast()
  const isTyping = shallowRef(false)

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
      isTyping.value = true
      const text = await $fetch('/api/ai', {
        method: 'post',
        body: chat.value,
      })
      if (text) {
        chat.value.messages.push({
          role: 'assistant',
          content: text,
        })
        isTyping.value = false
      }
    }
    catch (error) {
      console.error('error', error)
      toast.add({ title: `${error}` })
    }
  }

  return {
    chat,
    send,
    isTyping,
  }
}
