<template lang="pug">
div.tw-w-full.tw-px-8.tw-py-2.tw-border-b-4.tw-border-reed.tw-border-solid.tw-flex.tw-flex-row
  div
    img(src="@/assets/logo.png" width="250")
  div.tw-w-full.tw-justify-between.tw-flex.tw-flex-row.tw-items-center
    div.flex.tw-flex-row
        a(href="/") Accueil
        a(href="/") Cette semaine
        a(href="/") Coup de Cœur
    div
      input.border.tw-w-full(v-model="text")
</template>

<script setup lang="ts">
import { ref } from 'vue'

const text = ref('')
</script>

