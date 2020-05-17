import React, { useState, useEffect } from 'react'

const Shopping = ({id, name, price, picked, onChecked = () => {}}) => {
    const [checked, setChecked] = useState(picked);

    useEffect(() => {
        setChecked(picked);
    }, [picked]);

    const onChange = () => {
        setChecked(prevChecked => {
            onChecked(id, !prevChecked);
            return !prevChecked;
        });
    }

    return (
        <tr>
            <td style={{width: 50}}><input type="checkbox" checked={checked} onChange={onChange} /></td>
            <td style={{textAlign: "left"}}>{name}</td>
            <td style={{textAlign: "right"}}>{price}</td>
        </tr>
    )
}

export default Shopping
