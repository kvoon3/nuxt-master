// @ts-check

import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default antfu({
  vue: true,
})
  .append(nuxt({
    rules: {
      'nuxt/nuxt-config-keys-order': 'error',
    },
  }))
