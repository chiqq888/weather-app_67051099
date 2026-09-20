const apiKey = CONFIG.API_KEY;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('cityInput');

searchBtn.addEventListener('click', function() {

    const city = cityInput.value.trim();
    if(city === "") {
        showError();
        return;
    } else {
        // testAPIwithInput(city);
        fetchWeather(city);
        // console.log(fetchWeather(city));
        return;
    }
})

// async function testAPI() {

//     const url =
//         `https://api.openweathermap.org/data/2.5/weather` +
//         `?q=Bangkok` +
//         `&appid=${apiKey}` +
//         `&units=metric` +
//         `&lang=th`;

//     const respone = await fetch(url);
//     const data = await respone.json();

//     console.log(data);
// }

// // testAPI();

// async function testAPIwithInput(cityInput) {

//     const url =
//         `https://api.openweathermap.org/data/2.5/weather` +
//         `?q=${encodeURIComponent(cityInput)}` +
//         `&appid=${apiKey}` +
//         `&units=metric` +
//         `&lang=th`;

//     const response = await fetch(url);
//     const data = await response.json();

//     console.log(data);
// }

async function fetchWeather(cityInput) {

    const url =
        `https://api.openweathermap.org/data/2.5/weather` +
        `?q=${encodeURIComponent(cityInput)}` +
        `&appid=${apiKey}` +
        `&units=metric` +
        `&lang=th`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('เกิดข้อผิดพลาด : ${response.status')
        }
        const data = await response.json();
        // console.log(data)
        displayWeather(data);
        // return data;

    } catch (error) {
        throw error;
    }
}

const loading = document.getElementById('loading');
const weatherResult = document.getElementById('weatherResult');
const error = document.getElementById('error');

function displayWeather(data) {

    const name = data.name;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;
    const html = `
        <div class="weatherCard">
            <div class="header">
                <p><b>This is Weather Info in</b></p>
                <p>${name}</p>
            </div>
            <div class="info">
                <p><b>Temperature :</b> ${temp} °C </p>
                <p><b>Humidity :</b> ${humidity} % </p>
                <p><b>Wind Speed :</b> ${wind} m/s </p>
            </div>
        </div> 
        `
    weatherResult.classList.remove('hidden')
    weatherResult.innerHTML = html;
}


function showLoading() {
    loading.classList.remove('hidden');
    loading.innerHTML = 'กำลังโหลดข้อมูล'
}

function showError() {
    error.classList.remove('hidden');
    error.innerHTML = 'กรุณากรอกชื่อเมือง'
}

// async function loadingWeather(cityInput) {

//     try {
//         loading.classList.remove('hidden')
//     } catch (error) {

//     }
// }
