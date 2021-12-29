import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../assets/shared/icon-hamburger.svg'
import Close from '../assets/shared/icon-close.svg'
import Logo from '../assets/shared/logo.svg'

import './nav.css'

const Navbar = () =>{
    const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
        
	};

	const closeMenu = () => {
		setOpen(false);
	};
    
    return(
        <header className="primary-header flex">
            <div className="logo">
                <img src={Logo} alt="company logo"/>
            </div>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation" onClick={handleClick} >
                <span className="sr-only">Menu</span>{open ? <img src={Close} alt="close navigation button"/>: <img src={Hamburger} alt="navigation button"/>}
            </button>  
            <nav>
                <ul id="primary-navigation"   className={open?'primary-navigation mobile navbar underline-indicators flex':'primary-navigation navbar underline-indicators flex'}>
                    <li className="nav-item active " onClick={closeMenu}>
                        <Link to = "/home" className="nav-link ff-sans-cond uppercase text-white letter-spacing-2" >
                            <span aria-hidden="true">00</span>Home
                        </Link>
                    </li>
                    <li className="nav-item"  onClick={closeMenu}>
                        <Link to = "/destination" className="nav-link ff-sans-cond uppercase text-white letter-spacing-2" >
                            <span aria-hidden="true">01</span>Destination
                        </Link>
                    </li>
                    <li className="nav-item"  onClick={closeMenu}>
                        <Link to = "/crew" className="nav-link ff-sans-cond uppercase text-white letter-spacing-2" >
                            <span aria-hidden="true">02</span>Crew
                        </Link>
                    </li>
                    <li className="nav-item"  onClick={closeMenu}>
                        <Link to = "/technology" className="nav-link ff-sans-cond uppercase text-white letter-spacing-2" >
                            <span aria-hidden="true">03</span>Technology
                        </Link>
                    </li>
               
                </ul>
          
           </nav>
               
        </header>
       
    )
}

export default Navbar;