import { useState } from "react";

function SearchBar({ fetchWeather}) {
  let [city, setCity] = useState('')

  return (
    <div>

      <input placeholder = "Search City" type="text" 
      value={city}
      onChange={(event) => setCity(event.target.value)}
      onKeyDown= {(event) => {
        if (event.key === "Enter") fetchWeather(city)
      }}
      />

      <button onClick = {() => fetchWeather(city)}>Search</button>

    </div>
  )
}
export default SearchBar