import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './ToDo.css'

const ToDo = ({id, content, checked, onDelete, onEdit, onChange}) => {
    const [done, setDone] = useState(checked);

    useEffect(() => {
        onChange(id, done);
    }, [done]);

    return (
        <div className="ToDo">
            <p> <input type='checkbox' checked={done} onChange={e => {
                setDone(prevChecked => !prevChecked);
            }}/>  {content}</p>
            <button style={{margin: 20}} onClick={() => onDelete(id)}>Delete</button>
            <button style={{margin: 10}} onClick={() => onEdit(id)}>Edit</button>
        </div>
    )
    
};

ToDo.propTypes = {
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
}

export default ToDo
