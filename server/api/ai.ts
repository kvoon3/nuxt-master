import type { Chat } from '~/types'
import { genText } from '../services/genText'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody<Chat>(event)

  return await genText(messages)
})
