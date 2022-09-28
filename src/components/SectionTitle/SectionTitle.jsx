import React, { Fragment } from 'react';
import propTypes from 'prop-types';

export default function SectionTitle({ title, children }) {
return (
    <Fragment>
    <h1>{title}</h1>
    {children}
    </Fragment>
);
}

SectionTitle.propTypes = {
title: propTypes.string.isRequired,
children: propTypes.element.isRequired,
};