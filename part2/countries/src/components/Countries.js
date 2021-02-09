import React from 'react'
import Details from './Details'

const Countries = ({ countries, setFilter }) => {
    
    const handleShowCountry = (event) => {
        setFilter(event.target.getAttribute('filter'))
    }

    return(
        <div>
            {countries.length > 10 && 
            <p>
                Too many matches, specify another filter
            </p>}

            {countries.length <= 10 && countries.length > 1 &&
            countries.map(country => (
                <li key={country.name}>
                    {country.name}
                    <button onClick={handleShowCountry} filter={country.name}>show</button>
                </li>
            ))}

            {countries.length === 1 &&
            <Details country={countries[0]} />
            }
        </div>)
}

export default Countries