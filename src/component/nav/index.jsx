// import React from 'react';
import { Link } from 'react-scroll';
import './index.css';                     



function Nav() {
  return (
    <>
      <div className="navcontainer">
        <Link to='https://Sofrosyn.com' className="nav-logo">
          <img src='./logo/sofrosyne-llc.jpg'  alt='' />
        </Link>

        <ul className="nav-content">
            {/* <Link smooth={true} to="hero" ><li>Home</li></Link> */}
            <Link smooth={true} to="features" ><li>Our work</li></Link>
            <Link smooth={true} to="call" ><li>How it works</li></Link>
            <Link smooth={true} to="benefits" ><li>Benefits</li></Link>
            <Link smooth={true} to="services" ><li>Services</li></Link>
            {/* <Link smooth={true} to="pricing" ><li>Pricing</li></Link> */}
        </ul>
      </div>    

    </>
  );
}
export default Nav;


  