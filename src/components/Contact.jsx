import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Contact(props) {
    const upArrow = <img 
        src={require('../assets/arrow-alt-circle-up-solid.svg')} 
        alt='Up arrow' 
        width='50px' />;

    const downArrow = <img 
        src={require('../assets/arrow-alt-circle-down-solid.svg')} 
        alt='Down arrow' 
        width='50px' />;
    
    const homeIcon = <img 
        src={require('../assets/home-solid.svg')} 
        alt='Home icon' 
        width='50px' />;
    
    const style = {
        background: `url(${require('../assets/contact.jpg')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section className='container-fluid p-3' id='contact' style={style}>
            <div className='d-flex justify-content-between'>
                <AnchorLink className='btn btn-light' href='#home'>{homeIcon}</AnchorLink>
                <AnchorLink className='btn btn-light' href='#projects'>{upArrow}</AnchorLink>
            </div>
            <div className='container-md appSection mx-3-auto my-5'>
                CONTACT
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </section>
    )
}