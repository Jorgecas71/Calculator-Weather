<script>
export default { data() { return { weather: null, temperature: null, }; }, methods: { async fetchWeather() { const url = 'https://www.el-tiempo.net/api/json/v2/provincias/33'; try { const response = await fetch(url); if (!response.ok) { throw new Error('Network response was not ok ' + response.statusText); } const data = await response.json(); const oviedoData = data.ciudades.find(ciudad => ciudad.name === 'Oviedo'); if (oviedoData) { this.weather = { description: oviedoData.stateSky.description }; this.temperature = oviedoData.temperatures.max; } } catch (error) { console.error('Error fetching weather data:', error); } }, }, mounted() { this.fetchWeather(); }, };

</script>

<template>
    <div class="weather">
        <h2>Weather in {{ city }}</h2>
        <p v-if="weather">{{ weather.description }} - {{ temperature }}°C</p>
        <p v-else>Loading...</p>
    </div>
</template>

<style lang="scss" scoped>
.weather {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
}
</style>