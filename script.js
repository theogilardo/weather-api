
const input = document.querySelector('#input')
const button = document.querySelector('#button')
const form = document.querySelector('#form')
const weather = document.querySelector('#weather')

button.addEventListener('click', (e) => {
  e.preventDefault();

  if(input.value.trim() !== '') {

  const city = input.value
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7e918318a291df997bd192ca77406428`
  fetchWeather(url);
  form.reset();
  } else {
    alert('Please enter valid city!')
  }

});

async function fetchWeather(url){

  try {
    weather.innerHTML = ''

    let result = await fetch(url);
    let response = await result.json();
    console.log(response)

    let cityName = response.name;
    let weatherMain = response.weather[0].main;
    let weatherDesc = response.weather[0].description;
    let temperature = Math.floor(response.main.temp);

    weather.innerHTML = `
    <h2>${cityName}</h2>
    <h3>${weatherDesc}</h3>
    <img src="./img/${weatherMain}.png" alt="icon">
    <h1>${temperature}°C</h1>
    `
    weather.classList.remove('hidden')

  } catch (error) {
    weather.classList.add('hidden')
    alert('City not found!')

  }

};

