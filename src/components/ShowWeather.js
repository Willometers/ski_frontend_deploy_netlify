import { useEffect } from "react"


const WeatherShow = () => {  
    
    // const [weather, setWeather ] = useState([])

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b308c25a70msh6435785816fb0dep1bf6dejsn6078fe51dd14',
            'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
    };


    useEffect(() => {
        fetch('https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Washington%2CDC%2CUSA&contentType=csv&unitGroup=us&shortColumnNames=0', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    })

        // console.log(weather)

    //  if (weather.length > 0)
        return (
            <div>
                <h1>Loaded</h1>
            </div>
    )
    // else 
    //     return (
    //         <div>
    //             <h1>Loading</h1>
    //         </div>
    //     )
    
}

export default WeatherShow