import React from 'react';

import { ReactComponent as GithubIcon } from '../assets/nav_icons/github-brands.svg';
import { ReactComponent as LinkedInIcon } from '../assets/nav_icons/linkedin-brands.svg';
import { ReactComponent as ContactIcon } from '../assets/nav_icons/envelope-open-text-solid.svg';


export default function Footer(props) {
    
    return (
        <div className='fixed-bottom bg-dark d-flex justify-content-center' style={{height: '5vh'}}>
            <GithubIcon className='smallIcon'/>
            <LinkedInIcon className='smallIcon'/>
            <ContactIcon className='smallIcon'/>
        </div>
    )
}