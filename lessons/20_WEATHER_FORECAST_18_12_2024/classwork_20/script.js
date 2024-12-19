const loader = document.getElementById('loader');
const weatherContainer = document.getElementById('weather-box');

// Показать лоадер
function showLoader() {
  loader.classList.toggle('hidden'); // Убираем класс 'hidden', чтобы показать лоадер
  weatherContainer.classList.toggle('hidden'); // Скрываем контейнер с погодой
}

// Скрыть лоадер
function hideLoader() {
  loader.classList.toggle('hidden'); // Добавляем класс 'hidden', чтобы скрыть лоадер
  weatherContainer.classList.toggle('hidden'); // Показываем контейнер с погодой
}

// Имитация загрузки данных
showLoader(); // Показываем лоадер

setTimeout(() => {
  hideLoader(); // Скрываем лоадер через 3 секунды
}, 3000);

const weatherBox  = document.getElementById('weather-box')
const forecastBox = document.createElement('div')
forecastBox.className = 'forecast-box'

async function fetchWeather(){
    // geolocation
    const res = await fetch('https://get.geojs.io/v1/ip/geo.json')
    const data = await res.json()
    
    const city = document.createElement('h2')
    city.textContent = data.city

    const latitude = document.createElement('h3')
    latitude.textContent = `Latitude: ${data.latitude}`

    const longitude = document.createElement('h3')
    longitude.textContent = `Longitude: ${data.longitude}`
    
    //weather
    const res2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.latitude}&longitude=${data.longitude}&current_weather=true`)
    const data2 = await res2.json()
    
    const temperatureText = document.createElement('h3')
    const windspeedText = document.createElement('h3') 
    const weathercodeText = document.createElement('h3')   

    // * деструктуризация
    const {temperature, windspeed, weathercode} = data2.current_weather
    const {time: timeUnit, temperature: temperatureUnit, windspeed: windspeedUnit} = data2.current_weather_units
    
    temperatureText.textContent = `Temperature: ${temperature}${temperatureUnit}`
    windspeedText.textContent = `Windspeed: ${windspeed}${windspeedUnit}`
    
    console.log(`Weathercode: ${weathercode}`)

    if(weathercode === 0){
        weathercodeText.textContent = 'Clear sky'
    } else if(weathercode === 1 || weathercode === 2 || weathercode === 3){
        weathercodeText.textContent = 'Mainly clear, partly cloudy, and overcast'
    } else if(weathercode === 45 || weathercode === 48){
        weathercodeText.textContent = 'Fog and depositing rime fog'
    } else if(weathercode === 51 || weathercode === 53 || weathercode === 55){
        weathercodeText.textContent = 'Drizzle: Light, moderate, and dense intensity'
    } else if(weathercode === 56 || weathercode === 57){
        weathercodeText.textContent = 'Freezing Drizzle: Light and dense intensity'
    } else if(weathercode === 61 || weathercode === 63 || weathercode === 65){
        weathercodeText.textContent = 'Rain: Slight, moderate and heavy intensity'
    } else if(weathercode === 66 || weathercode === 67){
        weathercodeText.textContent = 'Freezing Rain: Light and heavy intensity'
    } else if(weathercode === 71 || weathercode === 73 || weathercode === 75){
        weathercodeText.textContent = 'Snow fall: Slight, moderate, and heavy intensity'
    } else if(weathercode === 77){
        weathercodeText.textContent = 'Snow grains'
    } else if(weathercode === 80 || weathercode === 81 || weathercode === 82){
        weathercodeText.textContent = 'Rain showers: Slight, moderate, and violent'
    } else if(weathercode === 85 || weathercode === 86){
        weathercodeText.textContent = 'Snow showers slight and heavy'
    } else if(weathercode === 95){
        weathercodeText.textContent = 'Thunderstorm: Slight or moderate'
    } else if(weathercode === 96 || weathercode === 99){
        weathercodeText.textContent = 'Thunderstorm with slight and heavy hail'
    }

    console.log(data2)
    console.log(temperature, windspeed, weathercode)
    
    forecastBox.append(temperatureText, windspeedText, weathercodeText)
    
    weatherBox.append(city, latitude, longitude, forecastBox)

    console.log(forecastBox)
}

fetchWeather()