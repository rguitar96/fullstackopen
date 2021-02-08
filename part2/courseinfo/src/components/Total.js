import React from 'react'

const Total = ({ parts }) => {
    const reducer = parts.reduce((sum, part) => (sum + part.exercises), 0)
    
    return(
        <p>
            <b>Number of exercises {reducer}</b>
        </p>
    )
}

export default Total