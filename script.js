function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "ee6b65fcf29e8d22c0bd248e3d4bf79a";

    if (city === "") {
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML =
                `<p><b>City:</b> ${data.name}</p>
                 <p><b>Temperature:</b> ${data.main.temp} °C</p>
                 <p><b>Weather:</b> ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            document.getElementById("result").innerHTML =
                "City not found!";
        });
}