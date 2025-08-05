import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [userName, setUserName] = useState("Ali Shahbaz")
  const [count, setCount] = useState(0)
  const [weatherInfo, setWeatherInfo] = useState({})
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState(null)


  let name = "Zeeshan Al";

  useEffect(() => {

    async function fetchWeather() {
      try {
        const res = await axios.get("https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore")
        console.log(res.data)

        setWeatherInfo({
          temp_c: res.data.current.temp_c,
          wind_kph: res.data.current.wind_kph,
          humidity: res.data.current.humidity,
        })

      }
      catch (err) {
        setError("Something went wrong , Try again later")
      } finally {
        setIsFetching(false)
      }
    }

    fetchWeather()
  }, [])


  function changeName() {
    alert("I am been claed")
    name = "Ali Shahbaz"
    setUserName("Farhanullah")
  }

  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }

  async function onManualClicl() {
    setIsFetching(true)
    try {
      const res = await axios.get("https://p2pclouds.up.railway.app/v1/learn/weather?city=lahore")
      console.log(res.data)

      setWeatherInfo({
        temp_c: res.data.current.temp_c,
        wind_kph: res.data.current.wind_kph,
        humidity: res.data.current.humidity,
      })

      setIsFetching(false)
    }
    catch (err) {

    }
  }
  return (
    <>
      <div>
        {error && <div>{error}</div>}
        {!isFetching && !error && <div>
          <div>Temperature C : {weatherInfo.temp_c}</div>
          <div>Wind KPH: {weatherInfo.wind_kph}</div>
          <div>Humidity: {weatherInfo.humidity}</div>
        </div>
        }
        {isFetching && <div>Is Fetching....</div>}


        <button onClick={onManualClicl}>Fetch Weather</button>

        <h1>My Name {name}</h1>
        <h1>My Us State Variable  {userName}</h1>
        <button onClick={changeName}>Change My Name</button>
        <button onClick={increment}>Increment</button>
        <div>{count}</div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </>
  )
}

export default App
