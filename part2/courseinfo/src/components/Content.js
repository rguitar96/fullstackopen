import React from 'react'
import Part from './Part'

const Content = ({ course }) => (
    <div>
        {course.parts.map(
            part => <Part key={course.id,part.id} part={part} />
        )}
    </div>
)

export default Content