import React from 'react';

export default (props) => {
    return (
        <div className='h-100'>
            Hi, my name is Amine Bensalem. <br/>
            I am a software engineer living in New York City.<br/>
            <span className='textLink' onMouseEnter={() => props.handleHover(true)}>
                Want to know more about me?
            </span>
        </div>
    )
}