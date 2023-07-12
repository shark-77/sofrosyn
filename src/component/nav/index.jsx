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
            <Link to="#" ><li>Home</li></Link>
            <Link to="#" ><li>How it works</li></Link>
            <Link to="#" ><li>Benefits</li></Link>
            <Link to="#" ><li>Services</li></Link>
            <Link to="#" ><li>Pricing</li></Link>
        </ul>
      </div>    

    </>
  )
}
export default Nav;


  