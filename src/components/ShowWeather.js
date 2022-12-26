import { useState, useEffect } from "react";


const WeatherShow = () => {  
    
    const [weather, setWeather ] = useState([])

    useEffect(() => {
        fetch()
            .then(response => response.json())
            .then(response => setWeather(response))
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