const searchBtn = document.querySelector(".search-btn");
const inputElem = document.querySelector(".searchInput");
const container = document.querySelector(".container");
const weatherDetails = document.querySelector('.weather-details')
const apiData = {
  key: "5b625c8665344bb3412b780a4d05256c",
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getAllData();
});

function getAllData() {
  const cityName = inputElem.value;
  fetch(`${apiData.url}${cityName}&appid=${apiData.key}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        showData(data)
    });
   
}

function showData(data) {
    weatherDetails.innerHTML = ''
  weatherDetails.innerHTML = `
  
  <div class="weather-details">
      <h2 class="city-name">${data.name} , ${data.sys.country}</h2>
      <p class="temp"><i class="fa-solid fa-temperature-full"></i>${Math.floor( data.main.temp - 273.15)}°c  ,   ${data.weather[0].main}</p>
      <p class="wind"><i class="fa-solid fa-wind"></i>wind: ${data.wind.speed}km/h</p>
      <p class="date">${showDate()}</p>
  </div>
  
  `
  inputElem.value =''
}

function showDate() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let now = new Date()
    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    return `${day} ${date} ${month} ${year}`
}