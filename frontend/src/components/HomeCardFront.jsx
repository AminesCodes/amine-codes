import React from 'react';

export default (props) => {
    return (
        <>
            <span onMouseEnter={() => props.handleHover(true)}>
                Front
            </span>
        </>
    )
}