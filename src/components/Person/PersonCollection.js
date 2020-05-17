import React from 'react';
import Person from './Person';

const PersonCollection = ({data, onDelete, onEdit}) => {
    return (
        <div>
            {data.map(person => (
                <Person
                    key={person.id}
                    id={person.id}
                    name={person.name}
                    age={person.age}
                    onClick={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
}

export default PersonCollection;
