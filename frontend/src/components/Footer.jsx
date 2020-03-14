import React, { useState, useLayoutEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ReactComponent as GithubIcon } from '../assets/nav_icons/github-brands.svg';
import { ReactComponent as LinkedInIcon } from '../assets/nav_icons/linkedin-brands.svg';
import { ReactComponent as ContactIcon } from '../assets/nav_icons/envelope-open-text-solid.svg';


export default function Footer(props) {
    const [ dimension, setDimension ] = useState({});
    const targetRef = useRef();

    useLayoutEffect(() => {
        const dim = targetRef.current.getBoundingClientRect()
        setDimension(dim);
        props.getFooterHeight(dim.height);
    }, targetRef.current)

    return (
        <div ref={targetRef} className='fixed-bottom bg-dark d-flex justify-content-center' style={{height: '5vh'}}>
            <a href='https://github.com/AminesCodes' target='_blank' rel='noopener noreferrer'>
                <GithubIcon className='smallIcon'/>
            </a>
            <a href='https://www.linkedin.com/in/amine-bensalem-468791144/' target='_blank' rel='noopener noreferrer'>
                <LinkedInIcon className='smallIcon'/>
            </a>
            <AnchorLink href='#contact'>
                <ContactIcon className='smallIcon'/>
            </AnchorLink>
        </div>
    )
}