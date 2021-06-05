import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function App() {
  const [weather, setWeather] = useState({})
  return (
    <main>
      <h1>Lamest Conversation Topic</h1>
      <div>
        <ol>
          <ul>
            <li>
              <form>
                <input type="text" placeholder="Zip Code" />
              </form>
            </li>
            <li>
              <button>Check</button>
            </li>
          </ul>
          <ul>
            <li>
              <form>
                <input type="text" placeholder="City" />
              </form>
            </li>
            <li>
              <button>Check</button>
            </li>
          </ul>
        </ol>
        <ol>
          <li>Conditions:</li>
          <li>Cloud Coverage:</li>
          <li>Temp:</li>
          <li>Humidity:</li>
          <li>Feels Like:</li>
          <li>Wind: Speed Direction</li>
        </ol>
      </div>
    </main>
  )
}
