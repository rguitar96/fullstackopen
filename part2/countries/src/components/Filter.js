import React from 'react'

const Filter = ({ filter, setFilter }) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return(
        <div>
            find countries: <input onChange={handleFilterChange} value={filter} />
        </div>)
}

export default Filter