import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Skills(props) {
    const upArrow = <img src={require('../assets/arrow-alt-circle-up-solid.svg')} alt='Up arrow' />
    const downArrow = <img src={require('../assets/arrow-alt-circle-down-solid.svg')} alt='Down arrow' />
    const homeIcon = <img src={require('../assets/home-solid.svg')} alt='Down arrow' />
    
    const style = {
        background: `url(${require('../assets/coding-laptop.jpeg')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section className='container-fluid p-3' id='skills' style={style}>
            <AnchorLink className='' href='#home'><span>{homeIcon}</span></AnchorLink>
            <div className='container-md appSection mx-3-auto my-5'>
                ABOUT
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </section>
    )
}