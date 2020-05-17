import React from 'react'

const ToDoCounter = ({checked, unchecked}) => {
    return (
        <div>
            <p>checked todo: {checked}</p>
            <p>unchecked todo: {unchecked}</p>
        </div>
    )
}

export default ToDoCounter
