import React, { useState, useEffect } from 'react';

const ToDoForm = ({submit = () => {}, content: propContent, id}) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (propContent !== null) {
            setContent(propContent);
        } else {
            setContent('');
        }
    }, [propContent]);

    return (
        <div>
            <input type="text" placeholder="Enter name" value={content} onChange={e => setContent(e.target.value)} />
            <button onClick={() => {submit(id, content); setContent('');}}>Submit</button>
        </div>
    )
}

export default ToDoForm
