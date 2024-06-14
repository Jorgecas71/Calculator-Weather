import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {

  const uri = import.meta.env.VITE_API_ENDPOINT_WEATHER
  const weather = ref([])

  async function get() {
    const response = await fetch()
    const data = await response.json()
    console.log(data);
  }

  return { weather, get }
})
