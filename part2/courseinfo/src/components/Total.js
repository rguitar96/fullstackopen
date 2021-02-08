import React from 'react'

const Total = ({ parts }) => {
    const reducer = parts.reduce((sum, part) => (sum + part.exercises), 0)
    
    return(
        <p>
            Number of exercises {reducer}
        </p>
    )
}

export default Total