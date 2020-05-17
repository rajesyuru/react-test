import React from 'react'

const PersonCounter = ({counter}) => {
    return (
        <div style={{marginBottom: 20}}>
            Jumlah person: <em>{counter}</em>
        </div>
    )
}

export default PersonCounter
