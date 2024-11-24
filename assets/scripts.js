const key = "60a311dc45add7cc0a68fe62a521c8ab"
function showDataInDisplay(data){
    document.querySelector("#cityName").innerHTML = data.name
    document.querySelector("#detailsTemperature").innerHTML = Math.ceil(data.main.temp)
    document.querySelector("#detailsWeather").innerHTML = data.weather[0].description
    document.querySelector("#detailshumidity").innerHTML = data.main.humidity
}
async function searchCity(city){
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)  
        data= await res.json()  
        showDataInDisplay(data)
    }
    catch (e) {
        console.log("Ocorreu o seguinte erro: "+e.message)
    }
}
function search() {
    const city = document.querySelector("#inputSearch").value
    searchCity(city)
}
