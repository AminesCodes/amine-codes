import React from 'react';

// import BgImg from ''

export default function Home(props) {
    const style = {
        background: `url(${require('../assets/coding.png')}) no-repeat center center fixed`,
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section id='home' style={style}>
            HOME
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
    )
}