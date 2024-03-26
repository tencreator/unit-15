import React, {useState, useEffect} from "react"
import axios from "axios"

export default function Weather(): JSX.Element {
    const [weather, setWeather] = useState<any>(null)

    useEffect(() => {
        const getWeather = async () => {
            // const response = await fetch("http://api.weatherapi.com/v1/current.json?key=ba36d4033c4943d995c113559242603&q=London")
            axios.get("http://api.weatherapi.com/v1/current.json?key=ba36d4033c4943d995c113559242603&q=London")
                .then(response => {
                    setWeather(response.data)
                })
        }

        getWeather()
        console.log(weather)
    }, [weather])

    return (
        <div>
            {weather ? <RenderWeatherDetails weather={weather} /> : <p>Loading...</p>}
        </div>
    )
}

function RenderWeatherDetails({weather}: {weather: any}): JSX.Element {

    return (
        <>
            <h1>Weather</h1>

            <div className="flex flex-center-hori">
                <section>
                    <h2>Location: {weather.location.name}</h2>
                    <p>Region: {weather.location.region}</p>
                    <p>Country: {weather.location.country}</p>
                    <p>Local Time: {weather.location.localtime}</p>
                </section>
                <section>
                    <h2>Current Weather</h2>
                    <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
                    <p>Temperature: {weather.current.temp_c}°C</p>
                    <p>Condition: {weather.current.condition.text}</p>
                    <p>Wind: {weather.current.wind_mph} mph</p>
                    <p>Humidity: {weather.current.humidity}%</p>
                    <p>Feels Like: {weather.current.feelslike_c}°C</p>

                </section>
            </div>
        </>
    )
}