import React, { useState, useEffect } from 'react';
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
import { ReactComponent as BootstrapIcon } from '../assets/skills/bootstrap.svg';
import { ReactComponent as HerokuIcon } from '../assets/skills/heroku.svg';


export default function Skills(props) {
    const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setTimeout(() => {
                setScreenWidth(window.innerWidth)   
            }, 1500);
        })
        return () => window.removeEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
        })
    })

    const style = {
        background: `url(${require('../assets/coding-laptop.jpeg')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }

    const smallScreen = <>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><ReactIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><JsIcon />Javascript</div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><NodeIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><HtmlIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><CssIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><PostgresIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><ExpressIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><BootstrapIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><GitIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconSm text-center'><HerokuIcon /></div>
        </>

    const largeScreen = <>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><ReactIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><JsIcon />Javascript</div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><NodeIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><HtmlIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><CssIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><PostgresIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><ExpressIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><BootstrapIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><GitIcon /></div>
            <div className='col-6 col-md-4 col-lg-3 my-5 skillIconLg text-center'><HerokuIcon /></div>
        </>

    const h = props.sectionInnerDivH - (2 * props.navIconH);
    
    return(
        <section className='container-fluid px-3 pb-3' id='skills' style={style}>
            <div style={{height: props.navBarH}}></div>
            <div className='d-flex justify-content-between'>
                <AnchorLink href='#home'>
                    <HomeIcon className='navIcon'/>
                </AnchorLink>
                <AnchorLink href='#home'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            </div>
            <div className='container-md appSectionLight mx-3-auto' style={{minHeight: `${h}px`}}>
                <div className='text-center h2 pt-3'>Some of the tools I like to work with</div>
                <div className='row justify-content-sm-center mx-auto text-center'>
                    { screenWidth < 700
                        ? smallScreen
                        : largeScreen
                    }
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
