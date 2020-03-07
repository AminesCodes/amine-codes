import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Contact(props) {
    const upArrow = <img src={require('../assets/arrow-alt-circle-up-solid.svg')} alt='Up arrow' />
    const downArrow = <img src={require('../assets/arrow-alt-circle-down-solid.svg')} alt='Down arrow' />
    const homeIcon = <img src={require('../assets/home-solid.svg')} alt='Down arrow' />
    
    const style = {
        background: `url(${require('../assets/contact.jpg')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section className='container-fluid p-3' id='contact' style={style}>
            <AnchorLink className='btn' href='#home'>Home</AnchorLink>
            <AnchorLink className='btn' href='#home'>Home</AnchorLink>

            <div className='container-md appSection mx-3-auto my-5'>
                CONTACT
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </section>
    )
}