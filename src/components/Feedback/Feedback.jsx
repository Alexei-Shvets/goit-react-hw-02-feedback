import React from 'react';
import propTypes from 'prop-types';

export default function Feedback({options, handleIncrement}) {
    const buttonName = Object.keys(options);
    return (
        <ul>{buttonName.map(namestate => (
            <li key={namestate}>
                <button onClick={() => handleIncrement (namestate)} type='button'>{namestate}</button>   
        </li>
        ))}
    </ul>)
}

Feedback.propTypes = {
options: propTypes.object.isRequired
}
