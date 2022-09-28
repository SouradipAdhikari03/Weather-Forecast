// const { response } = require("express");


const cityN = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val')
const temp_status = document.getElementById('temp_status')
const feels_like = document.getElementById("feels_like");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const description = document.getElementById("description");

const datahide = document.querySelector('.middle_layer');


const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityN.value;
    if (cityVal == "") {
        city_name.innerText = `Please enter your city name`
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=55c364411faef1ba39cdce9b4cc97e9c`
            const response = await fetch(url);

            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            feels_like.innerText = `feels like-${arrData[0].main.feels_like}°C`;
            pressure.innerText = `Pressure-${arrData[0].main.pressure} N/m²`
            humidity.innerText = `humidity-${arrData[0].main.humidity}%`
            description.innerText = `${arrData[0].weather[0].description}`
            const tempMood = arrData[0].weather[0].main;
            //condition checking
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                    "<i class= 'fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                    "<i class= 'fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML =
                    "<i class= 'fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else {
                temp_status.innerHTML =
                    "<i class= 'fas fa-sun' style='color:#eccc68;'></i>"
            }
            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `Please enter your city name Properly`;
            datahide.classList.add('data_hide');

        }
    }
}

submitBtn.addEventListener('click', getInfo);