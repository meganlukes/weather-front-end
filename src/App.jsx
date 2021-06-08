import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function App() {
  const [weatherInfo, setWeatherInfo] = useState({ weatherInfo: [] })

  const [zipCode, setZipCode] = useState(10000)
  const [city, setCity] = useState('City')

  function updateZipCode(event) {
    setZipCode(event.target.value)
  }

  function updateCity(event) {
    setCity(event.target.value)
  }

  async function zipCodeWeather() {
    const weatherData = await axios
      .get(
        `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=038ca81c8c47ce0022176b5cdad909de&units=imperial`
      )
      .then((resp) => setWeatherInfo(resp.data))
  }

  async function cityWeather() {
    const weatherData = await axios
      .get(
        `api.openweathermap.org/data/2.5/weather?q=${city}&appid=038ca81c8c47ce0022176b5cdad909de&units=imperial`
      )
      .then((resp) => setWeatherInfo(resp.data))
  }

  useEffect(() => {
    zipCodeWeather()
  }, [])

  useEffect(() => {
    cityWeather()
  }, [])

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
              <button onClick={this.zipCodeWeather}>Check</button>
            </li>
          </ul>
          <ul>
            <li>
              <form>
                <input type="text" onChange={updateCity} placeholder="City" />
              </form>
            </li>
            <li>
              <button onClick={this.cityWeather}>Check</button>
            </li>
          </ul>
        </ol>
        <ol>
          <li>Conditions: {weatherInfo.weather.description} </li>
          <li>Cloud Coverage: {weatherInfo.clouds.all} % </li>
          <li>Temp: {weatherInfo.main.temp} F </li>
          <li>Humidity: {weatherInfo.main.humidity} %</li>
          <li>Feels Like: {weatherInfo.main.feels_like} F</li>
          <li>Wind: {weatherInfo.wind.speed} MPH</li>
        </ol>
      </div>
    </main>
  )
}
