import React from 'react'
import './benefits.css';

export default function Benefits() {
  return (
    <div className="section_7" id="benefits">
        <div className="section-content">
            <p>
                <span className="section-span"> Benefits of Working with Us</span>               
            </p>     
        </div>
        <div className="section-container">
            <div className="main-container">
                <div className="box-yy">
                    <p className="benefit-txt">1.
                        <span className="bold-bene-txt">Design folder</span><br />
                        Easily track projects and view complected designs.
                    </p>
                </div>
                <div className="box-yy">
                    <p className="benefit-txt">3.
                        <span className="bold-bene-txt">Affordable Pricing</span><br />
                        We believe that great products shouldn't break the bank.
                    </p>
                </div>
                <div className="box-yy">
                    <p className="benefit-txt">5.
                        <span className="bold-bene-txt">Flexible plans</span><br />
                        Our are flexile and can be scaled to meet your evolving product needs.
                    </p>
                </div>
            </div>
            <div className="main-container">
                <div className="box-yy">
                    <p className="benefit-txt">2.
                        <span className="bold-bene-txt">On-demand delivery</span><br />
                        Need multiple designs in a short amount of time? No problem!<br />
                        Our team can design multiple products at once at your desired timeline.
                    </p>
                </div>
                <div className="box-yy">
                    <p className="benefit-txt">4.
                        <span className="bold-bene-txt">Outstanding quality</span><br />
                        Our team of designers is dedicated to creating designs of
                        <br /> outstanding quality
                        that exceed your expectations
                    </p>
                </div>
                <div className="box-yy">
                    <p className="benefit-txt">6.
                        <span className="bold-bene-txt">Eccentric Products</span><br />
                        Each products is a unique work of art that is tailored to your<br /> specific needs.
                    </p>
                </div>
            </div>          
        </div>
        <div className="plans-btn">
            <button className="btn_plans">View our plans</button> 
        </div>
        {/* <div className="hotpink"></div> */}
    </div>    
)
}
