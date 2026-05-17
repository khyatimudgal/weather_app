import { useState } from "react"


function useWeather (){

  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchWeather (city) {

    const trimmed = city.trim()
    
      if (!trimmed) {
          setError("Please enter a city name.")
          setWeather(null)
          return
      }
   
      if (!isNaN(trimmed)) {
          setError("City names can't be just numbers. Try something like 'Paris' or 'Tokyo'.")
          setWeather(null)
          return
      }

    const key = import.meta.env.VITE_WEATHER_API_KEY

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${trimmed}&days=5&aqi=yes`


    setLoading(true)
    setError(null)

    try{
      const response = await fetch(url)
      const data = await response.json()

      if(!response.ok) {
        setError(data.error?.message || "City not found. Please check the name and try again.")
        setWeather(null)
        return
      }

      setWeather(data)

    }
    catch (err) {
      setError("Something went wrong. Check your connection and try again.")
      setWeather(null)
    }
    finally{
      setLoading(false)
    }
    
  }

  return { weather, loading, error, fetchWeather}

}

export default useWeather