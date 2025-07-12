console.log("weather app");
const apiKey = "f567f67abe4bc75af4fcdae5ec2bd7a1";
const apiWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?";
const apiDirectUrl = "http://api.openweathermap.org/geo/1.0/direct?q=";
let city = "dublin";
const btnSearch = document.getElementsByClassName("btnSearch")[0];
let weatherIcon = document.querySelector(".weather-icon");

function search() {
  city = document.getElementById("inputSearch").value;
  getLatLon();
}
async function checkWeather(lat, lon, name) {
  const res = await fetch(
    apiWeatherUrl + `lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();

  document.querySelector(".city").innerHTML = name;
  document.querySelector(".temp").innerHTML = data.main.temp + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "images/clear-sky.png";
      break;
    case "Rain":
      weatherIcon.src = "images/heavy-rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "images/mist.png";
      break;
    default:
      weatherIcon.src = "images/sun.png";
  }
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}
async function getLatLon() {
  const res = await fetch(apiDirectUrl + `${city}&appid=${apiKey}`);
  if (res.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  const data = await res.json();
  checkWeather(data[0].lat, data[0].lon, data[0].name);
}

btnSearch.addEventListener("click", search);
