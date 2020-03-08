import React from 'react';

export default function ProjectCardRight(props) {
    return (
        <>
            <div className='card mb-3 bg-dark'>
                <div className='row no-gutters'>
                    <div className='col-sm-5'>
                        <img src={props.project.image} className='card-img projectImage my-auto' alt={props.project.image} />
                    </div>
                    <div className='col-sm-7'>
                        <div className='card-body'>
                            <h5 className='card-title text-center'>{props.project.title}</h5>
                            <p className='card-text'>{props.project.description}</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}