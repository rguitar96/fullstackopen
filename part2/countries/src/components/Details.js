import React from 'react'

const Details = ({ country }) => {
    return(
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>languages</h2>
            {console.log(country.languages)}
            {country.languages.map(language =>
                <li key={language.name}>{language.name}</li>
            )}
            <br/>
            <img src={country.flag} width='20%' height='20%' />
        </div>
)}

export default Details