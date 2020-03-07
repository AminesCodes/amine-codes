import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Skills(props) {
    const upArrow = <img 
        src={require('../assets/arrow-alt-circle-up-solid.svg')} 
        alt='Up arrow' 
        width='50px' />;

    const downArrow = <img 
        src={require('../assets/arrow-alt-circle-down-solid.svg')} 
        alt='Down arrow' 
        width='50px' />;
    
    const homeIcon = <img 
        src={require('../assets/home-solid.svg')} 
        alt='Home icon' 
        width='50px' />;
    
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
                <AnchorLink className='btn btn-light' href='#home'>{homeIcon}</AnchorLink>
                <AnchorLink className='btn btn-light' href='#home'>{upArrow}</AnchorLink>
            </div>
            <div className='container-md appSection mx-3-auto'>
                ABOUT
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <div className='text-right'>
                <AnchorLink className='btn btn-light' href='#projects'>{downArrow}</AnchorLink>
            </div>
        </section>
    )
}