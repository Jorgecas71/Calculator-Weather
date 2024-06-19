<script>
export default { data() { return { weather: null, temperature: null, }; }, methods: { async fetchWeather() { const url = 'https://www.el-tiempo.net/api/json/v2/provincias/33'; try { const response = await fetch(url); if (!response.ok) { throw new Error('Network response was not ok ' + response.statusText); } const data = await response.json(); const oviedoData = data.ciudades.find(ciudad => ciudad.name === 'Oviedo'); if (oviedoData) { this.weather = { description: oviedoData.stateSky.description }; this.temperature = oviedoData.temperatures.max; } } catch (error) { console.error('Error fetching weather data:', error); } }, }, mounted() { this.fetchWeather(); }, };

const weatherIcons = {
    "clear-day": "wi-day-sunny",
    "clear-night": "wi-night-clear",
    "rain": "wi-rain",
    "snow": "wi-snow",
    "sleet": "wi-sleet",
    "wind": "wi-strong-wind",
    "fog": "wi-fog",
    "cloudy": "wi-cloudy",
    "partly-cloudy-day": "wi-day-cloudy",
    "partly-cloudy-night": "wi-night-alt-cloudy"
};

// Función para actualizar el icono y la información meteorológica
function updateWeather(weatherCondition) {
    const iconElement = document.getElementById('weather-icon');
    const infoElement = document.getElementById('weather-info');

    // Verificar que el elemento iconElement exista
    if (iconElement) {
        // Obtener el icono correspondiente a la condición meteorológica
        const iconClass = weatherIcons[weatherCondition] || "wi-na";

        // Actualizar el icono y la información
        iconElement.className = `wi ${iconClass} weather-icon`;
    } else {
        console.error('Elemento weather-icon no encontrado');
    }

    // Verificar que el elemento infoElement exista
    if (infoElement) {
        infoElement.textContent = weatherCondition.replace(/-/g, ' ');
    } else {
        console.error('Elemento weather-info no encontrado');
    }
}

// Ejemplo de actualización con una condición meteorológica
updateWeather('rain');

</script>

<template>
    <div class="weather">
  
      <h2>Weather in {{ city }}</h2>
        <p v-if="weather">{{ weather.description }} - {{ temperature }}°C</p>
        <p v-else>Loading...</p>
    </div>
    <div class="weather-container">
        <i id="weather-icon" class="wi wi-day-sunny weather-icon"></i>
    </div>

</template>

<style lang="scss" scoped>
.weather {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 20px;
}

body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
    margin: 0;
}

.weather-container {
    text-align: center;
}

.weather-icon {
    font-size: 5em;
}

.weather-info {
    font-size: 1.5em;
}
</style>
