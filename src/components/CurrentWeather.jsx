function CurrentWeather({weather, unit}) {
  const temp = unit === "c" ? weather.current.temp_c : weather.current.temp_f

    return (
        <div>
            <h2>{weather.location.name}, {weather.location.region}, {weather.location.country}</h2>
            <p>{temp}°{unit.toUpperCase()}</p>
            <p>{weather.current.condition.text}</p>
            <img src={weather.current.condition.icon} alt="weather icon" />
        </div>
    )
}

export default CurrentWeather