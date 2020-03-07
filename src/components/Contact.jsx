import React from 'react';

export default function Contact(props) {
    const style = {
        background: `url(${require('../assets/contact.jpg')}) no-repeat center center fixed`,
        webkitBackgroundSize: 'cover',
        mozBackgroundSize: 'cover',
        oBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section id='contact' style={style}>
            CONTACT
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </section>
    )
}