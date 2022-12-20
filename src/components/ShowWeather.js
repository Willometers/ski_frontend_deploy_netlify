import { useEffect, useState } from "react"


const WeatherShow = () => {  
    
    const [weather, setWeather ] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_APIKey}&q=13066&aqi=yes`, {mode: 'no-cors'})
        .then ((res) => {
            if (res.ok){
                res.json().then(setWeather(res))
            }
            else {
                console.log("error", res.status, res.statusText)
          }}, [])
        })

        console.log(weather)

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