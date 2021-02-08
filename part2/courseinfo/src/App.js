import React from 'react'
import Course from './components/Course'
import Total from './components/Total'

const App = ({ course }) => {
    
    return (
        <>
            <Course course={course} />
            <Total parts={course.parts} />
        </>
    )
}

export default App