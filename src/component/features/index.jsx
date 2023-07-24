// import React from 'react'
import './features.css';

export default function Features() {
  return (
    <>
        <div className="Section_3" id="features">
            <div className="deck-content-2">
                <p>
                    <span className="deck-span-2"> Featured Projects</span>               
                    Have a look at these cool designs!               
                    <a href='https://github.com/Sofrosyne-LLC'>
                        <button className="btn_view">View our work</button>  
                    </a>
                </p>   
                   

                <div className="photo-div">
                    <div className="photo-section_1">
                       
                        <a href='https://www.figma.com/file/xw0lgUN4oadLn9hNWb4aYG/Sofrosync-invoice-Main?type=design'>
                            <img className="shadow" src='./Images/cad3.jpg'alt="img" />
                        </a>
                        <a href='https://www.figmaz.com/file/RqI2UD0iWPQO1mCINcwHj9?type=design' >
                            <img className="shadow" src='./Images/cad6.png' alt="img" />
                        </a>
                    </div>

                    <div className="photo-section_1">
                        <a href='https://www.figma.com/file/R22KH2kRgmKT4V3y3WWOJD/%F0%9F%93%97Unizonn-Designs-Version-2?type=design'>
                            <img className="shadow"src='./Images/cad2.jpg' alt="img" />                    
                        </a>
                        <a href='https://www.figma.com/file/Flm9zNMjqko7S6RgEj1oJOkx?type=design'>
                            <img className="shadow" src='./Images/cad.jpg'alt="img" />
                        </a>
                    </div>
                    
                </div>
                <div className="pink-container">
                    <div className="pink-box">
                        <svg className="ttt" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.286438 20.248V13.696C0.286438 11.248 0.718438 8.992 1.58244 6.928C2.44644 4.864 3.91044 2.776 5.97444 0.663996L9.71844 3.616C8.18244 5.2 7.10244 6.664 6.47844 8.008C5.85444 9.352 5.54244 10.792 5.54244 12.328L3.31044 10.24H10.3664V20.248H0.286438ZM14.6144 20.248V13.696C14.6144 11.248 15.0464 8.992 15.9104 6.928C16.7744 4.864 18.2384 2.776 20.3024 0.663996L24.0464 3.616C22.5104 5.2 21.4304 6.664 20.8064 8.008C20.1824 9.352 19.8704 10.792 19.8704 12.328L17.6384 10.24H24.6944V20.248H14.6144Z" fill="#000000"/>
                        </svg>
                        <p>Sofrosyne-llc being an expert in digital transformation were able
                            <br />to articulate and implement our unique solutions with 
                            <br />a high degree of competence and standard which we are
                            <br /> thankful for.
                        </p>
                        <h1 className="bit_ceo">CEO Bitmama</h1>            
                    </div>    

                </div>                
            </div>       
          
        </div>

    </>
)

}
