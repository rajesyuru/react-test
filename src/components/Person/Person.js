import React from 'react';
import PropTypes from 'prop-types';
import './Style.css';

const Person = (props) => {
    return (
        <div style={styles.box} className="Person">
            Ini Person dengan nama <em>{props.name}</em> dengan usia <em>{props.age}</em>
            {props.children && (<p>{props.children}</p>)}
            <div>
                <button onClick={() => props.onClick(props.id)}>delete</button>
                <button onClick={() => props.onEdit(props.id)}>edit</button>
            </div>
        </div>
    );
};

const styles = {
    box: {
        border: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        padding: 15,
        margin: 2
    }
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default Person;