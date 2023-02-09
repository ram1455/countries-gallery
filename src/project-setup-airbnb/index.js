import "./style.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"

import React from "react"

export default function Airbnb () {
    const [countries, setCountries ] = React.useState([]);

    React.useEffect( () => {
        fetch("https://v3.football.api-sports.io/teams/countries", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "13315c272ba95f5c01a6c4bfec3f969d"
            }
        })
        .then(response => response.json())
        .then(data => setCountries(data.response))
        
    }, [0])
    console.log(countries)
 


    const cardsMapped = countries.map( country => {
        return <Cards 
                key={country.name}
                item={country}
                />
    })
    return (
        <div className="airbnb">
        <Navbar/>
        <Hero/>
        <div className="cards-container">
            {
                cardsMapped
            }
        </div>
        </div>
    )
}