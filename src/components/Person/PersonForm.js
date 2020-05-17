import React, { useState, useEffect } from 'react';

const PersonForm = ({style, name: propName, age: propAge, onSubmit = () => {}}) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    useEffect(() => {
        if (propName !== null) {
            setName(propName);
        } else {
            setName('');
        }
    }, [propName]);

    useEffect(() => {
        if (propAge !== null) {
            setAge(propAge);
        } else {
            setAge('');
        }
    }, [propAge]);

    const submitHandler = () => {
        setName('');
        setAge('');
        onSubmit(name, age * 1);
    };

    return (
        <div style={style}>
            <input type="text" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
            <input type="number" placeholder="Enter age" value={age} onChange={e => setAge(e.target.value)} />
            <button onClick={submitHandler}>Submit</button>
        </div>
    );
}

export default PersonForm;
