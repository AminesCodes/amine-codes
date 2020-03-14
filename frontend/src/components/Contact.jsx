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
    
    const h = props.sectionInnerDivH - (1 * props.navIconH);
    
    return(
        <section className='container-fluid px-3 pb-3' id='contact' style={style}>
            <div style={{height: props.navBarH}}></div>
            <div className='d-flex justify-content-between'>
                <AnchorLink href='#home'>
                    <HomeIcon className='navIcon'/>
                </AnchorLink>
                <AnchorLink href='#projects'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            </div>
            <div className='container-md appSectionDark mx-3-auto' style={{minHeight: `${h}px`}}>
                <div className='text-center h2 pt-3'>Get in touch</div>
                <div className='text-center h4 pt-3'>Feel free to reach out via the contact form</div>
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