import React from 'react';

import { ReactComponent as GithubIcon } from '../assets/nav_icons/github-brands.svg';
import { ReactComponent as PlayIcon } from '../assets/nav_icons/play-circle-solid.svg';

export default function ProjectCardLeft(props) {
    return (
        <div className='card mb-3 bg-dark'>
            <div className='row no-gutters'>
                <div className='col-sm-7'>
                    <div className='card-body'>
                        <h5 className='card-title text-center'>{props.project.title}</h5>
                        <p className='card-text'>{props.project.description}</p>
                    </div>
                    <div className='mb-2'>
                        <div className='text-center mb-2'>
                            <span className='font-weight-bold'>Techs:</span> {props.project.techs}
                        </div>
                        <div className='d-flex justify-content-between'>
                            <a href={props.project.github}><GithubIcon className='smallIcon'/></a>
                            { props.project.live.length
                                ? <a href={props.project.live}><PlayIcon className='smallIcon mb-2'/></a>
                                : null
                            }
                        </div>
                    </div>
                </div>
                <div className='col-sm-5 d-flex align-items-center justify-content-center'>
                    <img src={props.project.image} className='card-img projectImage my-auto' alt={props.project.image} />
                </div>
            </div>
        </div>
    )
}