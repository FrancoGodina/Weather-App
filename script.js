async function getWeather(){
    try {
        const search = document.querySelector("#searchField");
        const btn = document.querySelector("button")

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=` + search.value + `&appid=cc7ca1a348334bcda596941ae0e82f6c`, {mode: "cors"})

        const weatherData = await response.json()

        let writePlace = function() {
            document.getElementById("place").innerHTML = capitalizeFirst(search.value) + ", " + weatherData.sys.country;
        }
        let writeTemp = function() {
            document.getElementById("temperature").innerHTML = "Temperature:" + kelToCel(weatherData.main.temp) + "°C";
        }
        let writeHum = function() {
            document.getElementById("humidity").innerHTML = "Humidity:" + weatherData.main.humidity + "%";
        }
        let writeDescription = function() {
            document.getElementById("description").innerHTML = capitalizeFirst(weatherData.weather[0].description);
        }

        let whatWeather = function whatWeather() {
            if (weatherData.weather[0].main === "Clear") {
                let img = document.getElementById("weatherImage");
                img.src = "/images/sunny.png"
            }
            else if (weatherData.weather[0].main === "Rain") {
                let img = document.getElementById("weatherImage");
                img.src = "/images/rain_light.png"
            }
            else if (weatherData.weather[0].main === "Thunderstorm") {
                let img = document.getElementById("weatherImage");
                img.src = "/images/electric storm.png"
            }
            else if (weatherData.weather[0].main === "Clouds") {
                let img = document.getElementById("weatherImage");
                img.src = "/images/cloudy.png"
            }
            else if (weatherData.weather[0].main === "Snow") {
                let img = document.getElementById("weatherImage");
                img.src = "/images/snow.png";
            }
        }

        whatWeather()
        writePlace();
        writeTemp();
        writeHum();
        writeDescription();
    
        console.log(weatherData)
        console.log(weatherData.weather[0].main)
    }
    catch (err) {
        alert(err);
    }
}
 

let kelToCel = function (x) {
    return parseInt(x) - 273;
}

let capitalizeFirst = function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}