import React from 'react';
import { List, Item } from './Feedback.styled';
import propTypes from 'prop-types';

export default function Feedback({options, handleIncrement}) {
    const buttonName = Object.keys(options);
    return (
        <List>{buttonName.map(namestate => (
            <Item key={namestate}>
                <button onClick={() => handleIncrement (namestate)} type='button'>{namestate}</button>   
        </Item>
        ))}
    </List>)
}

Feedback.propTypes = {
options: propTypes.object.isRequired
}
