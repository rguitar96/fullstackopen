import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Details = ({ country }) => {
    const api_key = process.env.REACT_APP_API_KEY

    const [ weather, setWeather ] = useState({
        'temperature': null,
        'wind_speed': null,
        'wind_dir': null,
        'icon': null
    })

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
            .then(response => {
                console.log(response)
                setWeather({ 'temperature': response.data.current.temperature,
                             'wind_speed': response.data.current.wind_speed,
                             'wind_dir': response.data.current.wind_dir,
                             'icon': response.data.current.weather_icons[0] })
            })
    }, [])

    return(
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Spoken languages</h2>
            {country.languages.map(language =>
                <li key={language.name}>{language.name}</li>
            )}
            <br/>
            <img src={country.flag} width='20%' height='20%' />
            <h2>Weather in {country.capital}</h2>
            <p><b>temperature:</b> {weather.temperature} Celsius</p>
            <img src={weather.icon} width='5%' height='5%' />
            <p><b>wind:</b> {weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
)}

export default Details