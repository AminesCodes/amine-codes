import React from 'react';

export default (props) => {
    return (
        <div className='h-100' onMouseLeave={() => props.handleHover(false)}>
            Bio ...
        </div>
    )
}