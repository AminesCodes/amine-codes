import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ReactComponent as HomeIcon } from '../assets/home-solid.svg';
import { ReactComponent as UpArrow } from '../assets/arrow-alt-circle-up-solid.svg';


export default function Contact(props) {
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
            <AnchorLink href='#navbar'>
                    <HomeIcon className='navIcon'/>
                </AnchorLink>
                <AnchorLink href='#projects'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            </div>
            <div className='container-md appSection mx-3-auto'>
                CONTACT
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </section>
    )
}