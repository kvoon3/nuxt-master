<script setup lang="ts">
const { chat, send } = useChat()

const { title } = useAppConfig()

useHead({
  title: `${chat.value.name} - ${title}`,
  htmlAttrs: {
    class: 'html-chat-classes',
  },
  script: [
    {
      // NOTES: disabled when use `useHeadSafe`
      innerHTML: 'var test = "header"',
    },
  ],
})

const scrollContainer = useTemplateRef<HTMLElement>('container')
const { scrollToBottom, isAtBottom } = useScrollArea(scrollContainer)

const text = shallowRef('')

function sendMessage() {
  if (!text.value.trim())
    return

  send(text.value)

  text.value = ''
}

watch(
  () => chat.value.messages.length,
  (newVal, oldVal) => {
    if (newVal > oldVal)
      scrollToBottom({ smooth: false })
  },
)
</script>

<template>
  <div class="h-full grid grid-rows-[min-content_1fr]">
    <div class="leading-loose text-2xl bg-accented font-semibold text-center align-middle">
      {{ chat.name }}
    </div>
    <div ref="container" class="overflow-y-auto overflow-x-hidden flex flex-col p-4 relative">
      <p
        v-for="msg, key in chat.messages" :key
        class="flex my-4 "
        :class="{
          'justify-end': msg.role === 'user',
        }"
      >
        <span
          class="inline-block p-2 rounded-md "

          :class="{
            'bg-muted max-w-2/3': msg.role === 'user',
          }"
        >
          {{ msg.content }}
        </span>
      </p>
      <UTextarea
        v-model="text"
        size="xl"
        autofocus
        autoresize
        :rows="2"
        :maxrows="6"
        placeholder="Typing text..."
        class="backdrop-blur sticky bottom-0 w-full lg:w-2/3 mx-auto"
        @keydown.ctrl.enter="sendMessage"
      >
        <button
          v-if="!isAtBottom"
          class="absolute -top-10 position-x-center"
          @click="() => scrollToBottom({ smooth: false })"
        >
          <UIcon
            name="ph:arrow-circle-down-duotone"
            class="p-4 bg-neutral-400 opacity-50 hover:opacity-75  rounded-full"
          />
        </button>
        <button class="absolute right-4 position-y-center flex items-center justify-center">
          <UIcon
            name="ph:key-return-fill"
            :class="!!text ? 'opacity-50' : 'opacity-20'"
            class="p-4 bg-neutral-400 hover:opacity-75 rounded-full"
            @click="sendMessage"
          />
        </button>
      </UTextarea>
    </div>
  </div>
</template>
