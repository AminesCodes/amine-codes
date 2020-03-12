import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function NavBar(props) {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark' id='navbar'>
            <AnchorLink className='navbar-brand' href='#home'>
                <img className='img-fluid logo' src={require('../assets/Portfolio_Icon.png')} alt='app logo'/>
            </AnchorLink>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#home'>Home</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#skills'>Skills</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#projects'>Projects</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link mb-0 h6' href=''>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#contact'>Contact</AnchorLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}