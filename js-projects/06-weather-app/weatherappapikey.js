const apiKey = "dc7b0e2f2c9c355c2f1e2abea6455ad1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

async function checkWeather(cityName){
  const response = await fetch(apiUrl + `q=${cityName}&appid=${apiKey}&units=imperial`);

  let data = await response.json();

  console.log(data);

  document.getElementById('temperature').innerHTML = Math.round(data.main.temp) + `°F`;
  document.getElementById('locationName').innerHTML = data.name;
}

checkWeather('york');
