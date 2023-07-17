<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/Header.vue'
</script>

<template lang="pug">
div
  Header
  router-view(class="tw-p-2 md:tw-p-8")
</template>

<style scoped>
</style>
