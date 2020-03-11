import React from 'react';

export default (props) => {
    return (
        <>
            <span onMouseLeave={() => props.handleHover(false)}>
                Back
            </span>
        </>
    )
}