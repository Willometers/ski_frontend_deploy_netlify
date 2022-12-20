import { useEffect, useState } from "react"


const WeatherShow = (userLocation) => {  
    
    const [weather, setWeather ] = useState()

    useEffect(() => {
        fetch(`${process.env.REACT_APP_APIKey}&q=13066&aqi=yes`)
        .then ((res) => {
            if (res.ok){
                res.json().then(setWeather(res))
            }
            else {
                console.log("error", res.status, res.statusText)
          }})
        })

     if (weather.length > 0)
        return (
            <div>

            </div>
    )
    else 
        return (
            <div>Loading</div>
        )
    
}

export default WeatherShow