import './App.css'
import SearchBar from "./components/SearchBar";
import useWeather from "./hooks/useWeather";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import { useState } from 'react';

function getBackground(weather) {
  const condition = weather.current.condition.text.toLowerCase()

  if (condition.includes('sunny') || condition.includes('clear')) return 'linear-gradient(160deg, #f7c948 0%, #f4a22d 50%, #e8702a 100%)'
  if (condition.includes('rain') || condition.includes('drizzle')) return 'linear-gradient(160deg, #4a6fa5 0%, #3d7ab5 50%, #5b9bd5 100%)'
  if (condition.includes('cloud') || condition.includes('overcast')) return 'linear-gradient(160deg, #8da5b5 0%, #a0b4c0 50%, #c5d3da 100%)'
  if (condition.includes('snow') || condition.includes('blizzard')) return 'linear-gradient(160deg, #c9dff0 0%, #daeaf7 50%, #eef6ff 100%)'
  if (condition.includes('fog') || condition.includes('mist')) return 'linear-gradient(160deg, #b0bec5 0%, #c8d6db 50%, #dde7eb 100%)'
  if (condition.includes('thunder') || condition.includes('storm')) return 'linear-gradient(160deg, #1c2a3a 0%, #2e3f52 50%, #455a6e 100%)'
  return 'linear-gradient(160deg, #87ceeb 0%, #b8e4f7 50%, #dff2fb 100%)'
}

function App() {
  const {weather, loading, error, fetchWeather} = useWeather()
  const [unit, setUnit] = useState("c")

  return (
    <div data-weather={weather ? weather.current.condition.text.toLowerCase() : ''} style={{ background: weather ? getBackground(weather) : 'linear-gradient(160deg, #87ceeb 0%, #b8e4f7 50%, #dff2fb 100%)' }}>
      <h1>Weather App</h1>
      <SearchBar fetchWeather = {fetchWeather} />
      <button onClick={() => setUnit(unit === "c" ? "f" : "c")}>
        Switch to {unit === "c"? "°F" : "°C"}
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {weather && <p>{weather.location.name}</p>}
      {weather && <CurrentWeather weather={weather} unit = {unit}/>}
      {weather && <WeatherDetails weather={weather} unit= {unit}/>}

    </div>
  )
}

export default App
