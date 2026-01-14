const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
require('dotenv').config();


const app = express();
app.use(express.static('public'));


const WEATHER_API_KEY = process.env.WEATHER_API_KEY;


app.get('/api/weather', async (req, res) => {
try {
const city = req.query.city;


const weatherRes = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
);
const weatherData = await weatherRes.json();


const countryCode = weatherData.sys.country;


const countryRes = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
const countryData = await countryRes.json();


const result = {
temperature: weatherData.main.temp,
feels_like: weatherData.main.feels_like,
description: weatherData.weather[0].description,
coordinates: weatherData.coord,
wind_speed: weatherData.wind.speed,
country: countryCode,
rain_3h: weatherData.rain ? weatherData.rain['3h'] : 0,
country_population: countryData[0].population,
country_region: countryData[0].region
};


res.json(result);
} catch (error) {
res.status(500).json({ error: 'Error fetching data' });
}
});


app.listen(3000, () => console.log('Server running on http://localhost:3000'));