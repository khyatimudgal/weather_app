import { useState } from "react"


function useWeather (){

  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchWeather (city) {

    const key = import.meta.env.VITE_WEATHER_API_KEY
  
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=5&aqi=yes`


    setLoading(true)
    setError(null)
    
    try{
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)

      if(!response.ok) {
        setError(data.error.message)
        return
      }

      setWeather(data)
    
    } 
    catch (err) {
      setError("Something went wrong. Try again")

    }
    finally{
      setLoading(false)
    }
    
  }

  return { weather, loading, error, fetchWeather}

}

export default useWeather