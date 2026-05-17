function WeatherDetails({weather, unit}) {
    const feels = unit === "c" ? weather.current.feelslike_c : weather.current.feelslike_f 
    
    const aqiLabels = ['', 'Good', 'Moderate', 'Unhealthy for sensitive groups', 'Unhealthy', 'Very Unhealthy', 'Hazardous']
    const aqi = weather.current.air_quality['us-epa-index']

  return (
    <div>

      <p>Humidity : {weather.current.humidity}%</p>
      <p>Wind Speed : {weather.current.wind_kph} Km/h</p>
      <p>Feels like : {feels}°{unit.toUpperCase()}</p>
      <p>UV Index : {weather.current.uv}</p>

      <p className="chacneOfRain">Chance of Rain : {weather.forecast.forecastday[0].day.daily_chance_of_rain}%</p>

      <p>Air Quality : {aqiLabels[aqi]}</p>

    </div>
  )
}

export default WeatherDetails