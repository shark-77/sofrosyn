import React from 'react';
import { Link } from 'react-scroll';
import './index.css';                     


// import brand from '../assets/images/sofrosyn.svg';

function Nav() {
  return (
    <>
      <div className="navcontainer">
        <Link to='https://Sofrosyn.com' className="nav-logo">
          <img src='' alt="img" />
        </Link>

        <ul className="nav-content">
            <Link smooth={true} to="#" ><li>Home</li></Link>
            <Link smooth={true} to="features" ><li>How it works</li></Link>
            <Link smooth={true} to="benefits" ><li>Benefits</li></Link>
            <Link smooth={true} to="services" ><li>Services</li></Link>
            <Link smooth={true} to="pricing" ><li>Pricing</li></Link>
        </ul>
      </div>    

    </>
  )
}
export default Nav;


  