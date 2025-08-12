import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Weather = () => {
    let params = useParams();

    const [weatherInfo, setWeatherInfo] = useState(null)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await axios.get(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${params.cityName}`)
                console.log(res.data)

                const info = {
                    temp_c: res.data.current.temp_c,
                    humidity: res.data.current.humidity
                }

                setWeatherInfo(info)
                setFetching(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchWeather()
    }, [])
    return (
        <div>

            {fetching && <div>Loding...</div>}
            {weatherInfo && <div>

                <div>
                    Temp    {weatherInfo.temp_c}
                </div>
                <div>
                    Humidity                    {weatherInfo.humidity}
                </div>
            </div>}
            DETAIL PAge of {params.cityName}
        </div>
    )
}

export default Weather