import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import ContactForm from './ContactForm';
import { ReactComponent as HomeIcon } from '../assets/nav_icons/home-solid.svg';
import { ReactComponent as UpArrow } from '../assets/nav_icons/arrow-alt-circle-up-solid.svg';


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
            <div className='container-md appSectionDark mx-3-auto'>
                <ContactForm />
                <p className='text-center mt-3'>You can also use your email client</p>
                <a className='d-block text-center mx-2 px-2 emailLink' 
                    href='mailto:aminebensalem@pursuit.org'
                    target='_blank' rel='noopener noreferrer'
                    >
                    aminebensalem@pursuit.org
                </a>
            </div>
            <div style={{height: '10vh'}}></div>
        </section>
    )
}