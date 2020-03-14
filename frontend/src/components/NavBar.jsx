import React, { useState, useLayoutEffect, useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function NavBar(props) {
    // converting a google doc link to display s PDF: replace “edit?usp=sharing” with “export?format=pdf” instead for downloads.
    // const resumeLink = 'https://docs.google.com/document/d/1A75G5Urpa5YaF1UQyGV8d40DbU5yuJeeOCxUZKT-SGM/edit?usp=sharing';
    const resumeLink = 'https://docs.google.com/document/d/e/2PACX-1vSF4FvKzXrb2uDDzqOwN_JBDpizFsZ4ACTE_UCEqE4JrBslGKgILUt_CNLz2dVNpDSvSD16rts79OWK/pub';
    
    const [ dimension, setDimension ] = useState({});
    const targetRef = useRef();

    useLayoutEffect(() => {
        const dim = targetRef.current.getBoundingClientRect()
        setDimension(dim);
        props.getNavBarHeight(dim.height);
    }, targetRef.current)

    return (
        <nav ref={targetRef} className='navbar navbar-expand-md navbar-dark bg-dark position-fixed w-100' id='navbar' style={{zIndex: '5'}}>
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
                        <a className='nav-link mb-0 h6' href={resumeLink} target='_self'>Resume</a>
                    </li>
                    <li className='nav-item'>
                        <AnchorLink className='nav-link mb-0 h6' href='#contact'>Contact</AnchorLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}