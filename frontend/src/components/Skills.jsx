import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { ReactComponent as HomeIcon } from '../assets/nav_icons/home-solid.svg';
import { ReactComponent as UpArrow } from '../assets/nav_icons/arrow-alt-circle-up-solid.svg';
import { ReactComponent as DownArrow } from '../assets/nav_icons/arrow-alt-circle-down-solid.svg';

import { ReactComponent as CssIcon } from '../assets/skills/css.svg';
import { ReactComponent as ExpressIcon } from '../assets/skills/express.svg';
import { ReactComponent as GitIcon } from '../assets/skills/git.svg';
import { ReactComponent as HtmlIcon } from '../assets/skills/html.svg';
import { ReactComponent as JsIcon } from '../assets/skills/js.svg';
import { ReactComponent as NodeIcon } from '../assets/skills/node.svg';
import { ReactComponent as PostgresIcon } from '../assets/skills/postgres.svg';
import { ReactComponent as ReactIcon } from '../assets/skills/react.svg';


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
                <div className='text-center h2'>Some of the tools I like to work with</div>
                <div className='row justify-content-sm-center'>
                    <div className='col-6 col-md-4 col-lg-3 my-5 skillIcon'><ReactIcon /></div>
                    <div className='col-6 col-md-4 col-lg-3 my-5 skillIcon'><JsIcon /></div>
                    <div className='col-6 col-md-4 col-lg-3 my-5 skillIcon'><NodeIcon /></div>
                    <div className='col-6 col-md-4 col-lg-3 my-5 skillIcon'><HtmlIcon /></div>
                    <div className='col-6 col-md-4 col-lg-3 my-5 skillIcon'><CssIcon /></div>
                    <div className='col-6 col-md-4 col-lg-3 my-5 skillIcon'><PostgresIcon /></div>
                    <div className='col-6 col-md-4 col-lg-3 my-5 skillIcon'><ExpressIcon /></div>
                    <div className='col-6 col-md-4 col-lg-3 my-5 skillIcon'><GitIcon /></div>
                </div>
            </div>
            <div className='text-right'>
                <AnchorLink href='#projects'>
                    <DownArrow className='navIcon'/>
                </AnchorLink>
            </div>
        </section>
    )
}