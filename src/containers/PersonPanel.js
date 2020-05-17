import React, { useState, useEffect } from 'react'
import PersonForm from '../components/Person/PersonForm'
import PersonCollection from '../components/Person/PersonCollection'
import PersonCounter from '../components/Person/PersonCounter';

const PersonPanel = () => {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Rhazes',
            age: 15
        },
        {
            id: 2,
            name: 'Gazel',
            age: 16
        },
        {
            id: 3,
            name: 'Eris Ristemena',
            age: 19
        }
    ]);
    const [editedData, setEditedData] = useState(null);

    useEffect(() => {
        setEditedData(null);
    }, [data]);

    const onDelete = id => {
        setData(data.filter(d => d.id !== id));
    };

    const onEdit = id => {
        setEditedData(data.find(d => d.id === id));
    };

    const onSubmitHandler = (name, age) => {
        if (editedData === null) {
            setData([
                {
                    id: (new Date()).getTime(),
                    name: name,
                    age: age * 1
                },
                ...data,
            ]);
        } else {
            setData(data.map(d => {
                if (d.id === editedData.id) {
                    d.name = name;
                    d.age = age;
                }

                return d;
            }));
        }
    };

    const counter = data.length;

    return (
        <div>
            <PersonForm
                style={{marginBottom: 20}}
                onSubmit={onSubmitHandler}
                name={editedData && editedData.name}
                age={editedData && editedData.age}
            />
            <PersonCounter counter={counter} />
            <PersonCollection data={data} onDelete={onDelete} onEdit={onEdit} />
        </div>
    )
}

export default PersonPanel

