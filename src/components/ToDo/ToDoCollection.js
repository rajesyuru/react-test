import React from 'react';
import ToDo from './ToDo';
import PropTypes from 'prop-types';

const ToDoCollection = ({data, onDelete, onEdit, onChange}) => {
    return (
        <div>
            {data.map(todo => (
                <ToDo key={todo.id} id={todo.id} content={todo.content} checked={todo.checked} onDelete={onDelete} onEdit={onEdit} onChange={onChange} />
            ))}
        </div>
    )
};

ToDoCollection.propTypes = {
    data: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ToDoCollection
