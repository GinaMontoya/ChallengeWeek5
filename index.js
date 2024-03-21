function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  // let cityElement = document.querySelector("#current-city");
  // cityElement.innerHTML = searchInputElement.value;
  city = searchInputElement.value;
  getWeatherData(city);
}

async function getWeatherData(city) {
  let keyApi = "10a4c51a7313ob0e1e185bc8c9t5a30f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${keyApi}`;

  try {
    const response = await axios.get(apiUrl);
    updateUI(response.data);
  } catch (error) {
    console.error("Error al buscar la ciudad:", error);
  }
}

function updateUI(weatherData) {
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = weatherData.city;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = weatherData.temperature.current;
  let;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
