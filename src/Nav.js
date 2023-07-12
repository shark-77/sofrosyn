import React from 'react';

                                                                
function Nav() {
  return (
    <>
      <div className="navcontainer">
        <Link to='https://Sofrosyn.com' className="nav-logo">
          <img src= './Images/sofrosyn.svg' alt="img" />
        </Link>
        <div className="nav-content">
          <Link to='/home'>Home</Link>
          <Link   to="/ourwork">Our work</Link>
          <Link   to="/how">How it works</Link>
          <Link   to="/benefit">Benefits</Link>
          <Link   to="/services">Services</Link>
          <Link   to="/pricing">Pricing</Link>
        </div>
      </div>    

    </>
  )
}

export default Nav


  