async function getWeather() {
const city = document.getElementById('city').value;
const res = await fetch(`/api/weather?city=${city}`);
const data = await res.json();
document.getElementById('result').textContent = JSON.stringify(data, null, 2);
}