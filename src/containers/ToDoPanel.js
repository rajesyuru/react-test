import React, { useState, useEffect } from 'react'
import ToDoCollection from '../components/ToDo/ToDoCollection'
import ToDoForm from '../components/ToDo/ToDoForm';
import ToDoCounter from '../components/ToDo/ToDoCounter';

const ToDoPanel = () => {
    const [data, setData] = useState([
        {
            id: 1,
            content: 'To Do',
            checked: false
        },
        {
            id: 2,
            content: 'bruh',
            checked: false
        },
    ]);

    const [editedData, setEditedData] = useState(null);
    
    const uncheckedCount = [];
    const checkedCount = [];

    data.forEach(d => {
        if (d.checked === false) {
            uncheckedCount.push(d);
        } else {
            checkedCount.push(d)
        }
    });
    
    const onDelete = (id) => {
        setData(prevData => prevData.filter(d => d.id !== id))
    };

    const onEdit = id => {
        setEditedData(data.find(d => d.id === id));
        console.log(id, editedData);
    };

    const onChange = (id, checked) => {
        
        setData(prevData => {
            return prevData.map(d => {
                if (d.id === id) {
                    d.checked = checked;
                }

                return d;
            })
        })
            
        console.log(id, checked)
    };


    const onSubmitHandler = (id, content) => {
        console.log(id, content)
        if (id === 0) {
            setData(prevData => {
                return [...prevData, {
                    id: (new Date()).getTime(),
                    content: content,
                    checked: false,
                }];
            });
        } else {
            setData(prevData => {
                return prevData.map(d => {
                    if (d.id === id) {
                        d.content = content;
                    }

                    return d;
                });
            });

            setEditedData(null);
        }
        // checkedUncheckedData()
    };


    // const uncheckedCount = data.forEach(d => d.checked === false);
    // console.log(typeof(uncheckedCount), uncheckedCount)

    return (
        <div>
            <ToDoForm submit={onSubmitHandler} id={editedData ? editedData.id : 0}
                content={editedData ? editedData.content : ''}/>
            <ToDoCounter checked={checkedCount.length} unchecked={uncheckedCount.length} />
            <ToDoCollection data={data} onDelete={onDelete} onEdit={onEdit} onChange={onChange} />
        </div>
    )
}

export default ToDoPanel
