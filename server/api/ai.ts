import type { Chat } from '~/types'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody<Chat>(event)

  return {
    id: `${messages[messages.length + 1]}`,
    role: 'assistant',
    text: 'message form server',
  }
})
