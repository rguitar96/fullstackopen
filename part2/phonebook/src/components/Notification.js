import React from 'react'

const Notification = ({ className, message }) => {
    const successStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const styleMap = {
        'success': successStyle,
        'error': errorStyle
    }

    const notificationStyle = styleMap[className]
    
    return((message === null) ? null : <div style={notificationStyle} className={className}>{message}</div>)
}

export default Notification
