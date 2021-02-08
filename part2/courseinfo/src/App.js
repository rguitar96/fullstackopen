import React from 'react'
import Course from './components/Course'
import Total from './components/Total'

const App = ({ courses }) => {
    const mapCourse = courses.map(course => (
        <div key={course.id}>
            <Course course={course} />
            <Total parts={course.parts} />
        </div>
    ))
    return (
        <>
            {mapCourse}
        </>
    )
}

export default App