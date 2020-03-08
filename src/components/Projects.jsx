import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import ProjectCardRight from './ProjectCardRight';
import ProjectCardLeft from './ProjectCardLeft';
import { ReactComponent as HomeIcon } from '../assets/home-solid.svg';
import { ReactComponent as UpArrow } from '../assets/arrow-alt-circle-up-solid.svg';
import { ReactComponent as DownArrow } from '../assets/arrow-alt-circle-down-solid.svg';
import projects from '../assets/projects/projects';


export default function Projects(props) {
    projects[0].image = require('../assets/apps_images/Fashion_Footprint.png');
    projects[1].image = require('../assets/apps_images/SuitApp.png');
    projects[2].image = require('../assets/apps_images/Escape_The_Dungeon.png');
    projects[3].image = require('../assets/apps_images/Pokemon_Battle.png');
    projects[4].image = require('../assets/apps_images/Memory_Game.png');
    projects[5].image = require('../assets/apps_images/Tic_Tac_Toe.png');

    const style = {
        background: `url(${require('../assets/coding-screen.png')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section className='container-fluid p-3' id='projects' style={style}>
            <div className='d-flex justify-content-between'>
                <AnchorLink href='#navbar'>
                    <HomeIcon className='navIcon'/>
                </AnchorLink>
                <AnchorLink href='#skills'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            </div>
            <div className='container-md appSection mx-3-auto'>
                {projects.map((project, i) => {
                    if (i % 2) {
                        return <ProjectCardRight key={project.title} project={project}/>
                    }
                    return <ProjectCardLeft key={project.title} project={project}/>
                })}
            </div>
            <div className='text-right'>
                <AnchorLink href='#contact'>
                    <DownArrow className='navIcon'/>
                </AnchorLink>
            </div>
        </section>
    )
}