import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function NavBar(props) {
    return (
        <nav className='navbar navbar-expand-md navbar-light bg-appColor'>
            <AnchorLink className='navbar-brand' href='#home'>
                {/* <img className='img-fluid' src={Logo} alt='app logo' width='130px' /> */}
                logo here
            </AnchorLink>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse text-right' id='collapsibleNavbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6 text-dark' href='#home'>Home</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6 text-dark' href='#projects'>Projects</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link mb-0 h6 text-dark' href=''>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6 text-dark' href='#contact'>Contact</AnchorLink>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6 text-dark' href='#about'>About</AnchorLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}