function on_geo_ok(position){
    API_KEY = 'b9fb044d7dcaf1b6003f058205b5c010'
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = `/ City:${data.name}`,
        weather.innerText = `Temp: ${data.main.temp} / Weather: ${data.weather[0].main}`
        })
}



function on_geo_error() {
    alert("Can't find you, No weather for you.")
}
navigator.geolocation.getCurrentPosition(on_geo_ok,on_geo_error)