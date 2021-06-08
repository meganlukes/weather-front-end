import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function App() {
  const [weatherInfo, setWeatherInfo] = useState({})

  const [zipCode, setZipCode] = useState(10000)
  const [city, setCity] = useState('City')

  function updateZipCode(event) {
    setZipCode(event.target.value)
    console.log('zipcode')
  }

  function updateCity(event) {
    setCity(event.target.value)
    console.log('city')
  }

  async function zipCodeWeather() {
    const weatherData = await axios
      .get(
        `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=038ca81c8c47ce0022176b5cdad909de&units=imperial`
      )
      .then((resp) => setWeatherInfo(resp.data))
    console.log(weatherData)
  }

  async function cityWeather() {
    const weatherData = await axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${city}&appid=038ca81c8c47ce0022176b5cdad909de&units=imperial`
      )
      .then((resp) => setWeatherInfo(resp.data))
    console.log(weatherData)
  }

  useEffect(() => {
    zipCodeWeather()
  }, [zipCode])

  useEffect(() => {
    cityWeather()
  }, [city])

  //`api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=038ca81c8c47ce0022176b5cdad909de&units=imperial`

  return (
    <main>
      <h1>Weather</h1>
      <div>
        <ol>
          <ul>
            <li>
              <form>
                <input
                  type="text"
                  onChange={updateZipCode}
                  placeholder="Zip Code"
                />
              </form>
            </li>
            <li>
              <button onClick={zipCodeWeather}>Check</button>
            </li>
          </ul>
          <ul>
            <li>
              <form>
                <input type="text" onChange={updateCity} placeholder="City" />
              </form>
            </li>
            <li>
              <button onClick={cityWeather}>Check</button>
            </li>
          </ul>
        </ol>
        {weatherInfo.weather ? (
          <ol>
            <li>Conditions: {weatherInfo.weather[0].description} </li>
            <li>Cloud Coverage: {weatherInfo.clouds.all} % </li>
            <li>Temp: {weatherInfo.main.temp} F </li>
            <li>Humidity: {weatherInfo.main.humidity} %</li>
            <li>Feels Like: {weatherInfo.main.feels_like} F</li>
            <li>Wind: {weatherInfo.wind.speed} MPH</li>
          </ol>
        ) : (
          <li>loading</li>
        )}
      </div>
    </main>
  )
}
