import { useState, useEffect } from "react";


const WeatherShow = () => {  
    
    const [currentUser, setcurrentUser ] = useState([])
    // const [error, setError ] = useState([])

    useEffect(() => {
        fetch(`https://rails-2n88.onrender.com/me`)
            .then(res => res.json())
            // .catch(res => setError(res))
            .then(res => setcurrentUser(res))
    }, [])

    if (currentUser)
        console.log("state", currentUser)

     if (currentUser)
            return (
                <div>
                    <h1>Loaded</h1>
                </div>
            )
    else 
        return (
            <div>
                <h1>Error</h1>
            </div>
        )
    
}

export default WeatherShow