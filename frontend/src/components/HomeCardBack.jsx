import React from 'react';

export default (props) => {
    return (
        <div className='h-100' onMouseLeave={() => props.handleHover(false)}>
            Hi, my name is Amine. <br/>
            I am a software engineer living in New York City.<br/>I am a software engineer living in New York City.<br/>I am a software engineer living in New York City.<br/>I am a software engineer living in New York City.<br/>I am a software engineer living in New York City.<br/>
        </div>
    )
}