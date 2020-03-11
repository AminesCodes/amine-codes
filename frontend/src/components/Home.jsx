import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ReactCardFlip from 'react-card-flip';

import HomeCardFront from './HomeCardFront';
import HomeCardBack from './HomeCardBack';
import { ReactComponent as HomeIcon } from '../assets/nav_icons/home-solid.svg';
import { ReactComponent as UpArrow } from '../assets/nav_icons/arrow-alt-circle-up-solid.svg';
import { ReactComponent as DownArrow } from '../assets/nav_icons/arrow-alt-circle-down-solid.svg';

export default function Home(props) { 
    const [ isCardFlipped, setIsCardFlipped ] = useState(false);

    const handleHover = (bool) => {
        setIsCardFlipped(bool);
    }

    const style = {
        background: `url(${require('../assets/problem-solving.jpg')}) no-repeat center center fixed`,
        WebkitBackgroundSize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }

    return(
        <section className='container-fluid p-3' id='home' style={style}>
            <div className='d-flex justify-content-between stickyTop'>
                <AnchorLink href='#navbar'>
                    <HomeIcon className='navIcon'/>
                </AnchorLink>
                <AnchorLink href='#navbar'>
                    <UpArrow className='navIcon'/>
                </AnchorLink>
            </div>

            <div className='container-md appSectionDark mx-3-auto'>
                <div className='row h-100'>
                    <div className='col-sm-6 my-auto text-center'>
                        Amine Bensalem
                    </div>

                    <div className='col-sm-6 my-auto text-center'>
                        <ReactCardFlip isFlipped={isCardFlipped} flipDirection="vertical">
                            <HomeCardFront handleHover={handleHover} />
                            <HomeCardBack handleHover={handleHover} />
                        </ReactCardFlip>
                    </div>
                </div>
            </div>

            <div className='text-right'>
                <AnchorLink href='#skills'>
                    <DownArrow className='navIcon'/>
                </AnchorLink>
            </div>
        </section>
    )
}