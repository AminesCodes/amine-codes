import React, { useState } from 'react';

export default (props) => {
    const [ display, setDisplay ] = useState('visible');
    setInterval(() => {
        const time = new Date().toLocaleTimeString();
        if (time[7] % 2) {
            setDisplay('visible');
        } else {
            setDisplay('invisible');
        }
    }, 1000);

    return (
        <div className='h-100'>
            <p className='font-weight-bold'>Hello world! <span className={display}>_</span></p>
            <p>My name is Amine Bensalem. <br/>
                I am a software engineer <br/>
                living in New York City.<br/>
                <span className='textLink' onMouseEnter={() => props.handleHover(true)}>
                    Want to know more about me?
                </span>
            </p>
        </div>
    )
}