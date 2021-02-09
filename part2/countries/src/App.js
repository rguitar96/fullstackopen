import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'

const App = () => {
    const [ countries, setCountries ] = useState([])
    const [ filter, setFilter ] = useState('')

    const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(request => {
                setCountries(request.data)
            })
    }, [])

    return(
        <>
            <h2>Find countries</h2>
            <Filter filter={filter} setFilter={setFilter}/>
            <Countries countries={ countriesToShow } setFilter={setFilter}/>
        </>
    )
}

export default App