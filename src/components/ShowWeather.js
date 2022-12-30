import { useState, useEffect } from "react";


const WeatherShow = () => {  
    
    const [weather, setWeather ] = useState([])

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERKey}&q=13066&aqi=no`)
            .then(res => res.json())
            .then(res => setWeather(res))
    }, [])

        if (weather.location)
            console.log("state", weather.current.condition.text)

     if (weather.location)
            return (
                <div>
                    <h1>Loaded</h1>
                    <h1>{weather.location.name}</h1>
                    <h2>{weather.current.condition.text}</h2>
                </div>
            )
    else 
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    
}

export default WeatherShow