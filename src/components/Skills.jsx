import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ReactComponent as HomeIcon } from '../assets/home-solid.svg';
import { ReactComponent as UpArrow } from '../assets/arrow-alt-circle-up-solid.svg';
import { ReactComponent as DownArrow } from '../assets/arrow-alt-circle-down-solid.svg';


export default function Skills(props) {
    const style = {
        background: `url(${require('../assets/coding-laptop.jpeg')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section className='container-fluid p-3' id='skills' style={style}>
            <div className='d-flex justify-content-between'>
                <AnchorLink href='#navbar'>
                    <HomeIcon className='navIcon'/>
                </AnchorLink>
                <AnchorLink href='#home'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            </div>
            <div className='container-md appSection mx-3-auto'>
                SKILLS
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <div className='text-right'>
                <AnchorLink href='#projects'>
                    <DownArrow className='navIcon'/>
                </AnchorLink>
            </div>
        </section>
    )
}