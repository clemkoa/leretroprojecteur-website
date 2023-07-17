<template lang="pug">
div.tw-border.tw-rounded-xl.tw-my-4
  div
    div Lundi 17 juillet 2023
    div work in progress be kind my man :) 
  div(v-if="isDatePickerOpen")
    v-date-picker(rounded)
  div(v-else)
    button Select Date
  div
    v-slider
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

const isDatePickerOpen = ref(true)
</script>
