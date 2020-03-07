import React from 'react';

export default function About(props) {
    const style = {
        background: `url(${require('../assets/coding-laptop.jpeg')}) no-repeat center center fixed`,
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section id='about' style={style}>
            ABOUT
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
    )
}