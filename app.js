const apiKey = CONFIG.API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
const cityInput = document.getElementById('cityInput');

async function testAPI() {

    // const url = baseUrl + `?q=Bangkok` + `&appid=${apiKey}` + `&units=metric` + `&lang=th`;
    const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=Bangkok` +
        `&appid=${apiKey}` +
        `&units=metric` +
        `&lang=th`;

    const respone = await fetch(url);
    const data = await respone.json();

    console.log(data);
}

testAPI();

// async function fetchWeather(cityInput) {

//     const url = 'https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid=${API key}'

// }

const loading = document.getElementById('loading');
const error = document.getElementById('error');

// async function loadingWeather(cityInput) {

//     try {
//         loading.classList.remove('hidden')
//     } catch (error) {

//     }
// }
