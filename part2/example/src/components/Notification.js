import React from 'react'

const Notification = ({ message }) => ((message === null) ? null : <div className='error'>{message}</div>)

export default Notification
