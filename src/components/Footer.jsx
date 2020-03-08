import React from 'react';

import { ReactComponent as GithubIcon } from '../assets/github-brands.svg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin-brands.svg';
import { ReactComponent as ContactIcon } from '../assets/envelope-open-text-solid.svg';


export default function Footer(props) {
    
    return (
        <div className='fixed-bottom bg-dark d-flex justify-content-center' style={{height: '5vh'}}>
            <GithubIcon className='smallIcon'/>
            <LinkedInIcon className='smallIcon'/>
            <ContactIcon className='smallIcon'/>
        </div>
    )
}