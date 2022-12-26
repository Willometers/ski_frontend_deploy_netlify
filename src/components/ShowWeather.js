import { useState, useEffect } from "react";


const WeatherShow = () => {  
    
    const [weather, setWeather ] = useState([])

    useEffect(() => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHERKey}}&q=13066&aqi=no`)
            .then(response => response.json())
            .then(response => setWeather(response))
            .then(console.log(weather))
    }, [])

        
     if (weather.length > 0)
        return (
            <div>
                <h1>Loaded</h1>
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