import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


export default function Home(props) {
    const downArrow = <img 
        src={require('../assets/arrow-alt-circle-down-solid.svg')} 
        alt='Down arrow' 
        width='50px' />
    
    const style = {
        background: `url(${require('../assets/coding.png')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
    
    return(
        <section className='container-fluid p-3' id='home' style={style}>
            <div className='container-md appSection mx-3-auto mt-5'>
                HOME
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <div className='text-right'>
                <AnchorLink className='btn btn-light' href='#skills'>{downArrow}</AnchorLink>
            </div>
        </section>
    )
}