<template lang="pug">
div.tw-w-full.tw-border.tw-py-4.tw-rounded-xl.tw-overflow-auto.tw-overflow-x-scroll.tw-bg-red-400
  div.tw-bg-white
    table.tw-relative.tw-table-fixed.tw-w-full.tw-bg-white.tw-divide-y.tw-divide-slate-400
      thead.tw-bg-red-400
        tr
          th.tw-pt-4.tw-pb-3.tw-px-6.tw-font-bold.tw-text-left Film
          th.tw-pt-4.tw-pb-3.tw-px-6.tw-font-bold.tw-text-left Séances
      tbody.tw-divide-y
        tr.tw-bg-white(v-for="screening in screenings" :key="screening.original_title")
          td.tw-py-3.tw-px-6(style="width: 50%;")
            a(href="/")
              span.tw-text-slate-800
                span.tw-font-semibold {{screening.original_title}}, 
                span.tw-text-slate-600.tw-capitalize {{ screening.director_sort_name.toLowerCase() }} ({{ screening.year }})
          td.tw-py-3.tw-px-6.tw-text-slate-600(style="max-width: 50%;")
            div(v-for="t in screening.showtimes_theater") {{ t.clean_name }} ({{t.zipcode_clean}})
              span &nbsp;{{ formatShowtimes(t.showtimes) }}
</template>
  
<script setup lang="ts">
defineProps(['screenings'])

function formatShowTime(t: number) {
  const hours = Math.floor(t);
  const minutes = t - hours;
  if (minutes === 0) {
    return `${hours}h`;
  }
  else {
    return `${hours}h${('0' + Math.floor(minutes * 60)).slice(-2)}`;
  }
}

function formatShowtimes(t: number[]) {
  return t.map(formatShowTime).join(', ');
}
</script>

<style scoped>
tr:nth-child(2n) {
  background-color: #fff2f2;
}
</style>
