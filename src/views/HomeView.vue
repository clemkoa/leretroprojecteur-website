<template lang="pug">
main
  div
    date-filter-card
  div
    Table(:screenings="sortedMovies")
</template>

<script setup lang="ts">
import { reactive, computed, ref, watch } from 'vue'
import type { Ref } from 'vue'
import { useCollection, useDatabaseList, useDocument } from 'vuefire'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import Table from '../components/Table.vue'
import DateFilterCard from '../components/DateFilterCard.vue'
import Header from './Header.vue'

const db = useFirestore();
const screeningsCollection = collection(db, 'website-by-date-screenings');
const selectedDate = ref('2023_07_17')
query(screeningsCollection, where('date', '==', selectedDate.value))

const movies: Ref<any[]> = ref([])
getData()

async function getData() {
  var rv: any[] = []
  const q = query(screeningsCollection, where('date', '==', selectedDate.value))
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    rv.push(doc.data())
  });
  movies.value = rv[0].movies;
}

const sortedMovies = computed(() => {
  // const q = query(screeningsCollection, where('date', '==', selectedDate.value))
  console.log("OKOK", movies.value)
  return movies.value
    .sort((a: any, b: any) => {
      return a.year - b.year
    })
})

watch(selectedDate, () => {
  getData()
})
</script>

