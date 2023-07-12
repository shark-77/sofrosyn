import React from 'react'
import './deck.css';
export default function DeckComponent() {
  return (
        <div className="deck_content">
            <div className="section_2">
                <p>WHY CHOOSE US
                    <br />
                    <span className="deck-span"> Our Expertise, Your Success</span>               
                    Partner with us to effectively design and lunch that<br /> products that exceed your goals.
                </p>         
            </div>
            <div className="team-container">
                <div className="division">
                    <svg className="fff" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_120_2027" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                            <rect width="100" height="100" fill="#413EB1"/>
                        </mask>
                        <g mask="url(#mask0_120_2027)">
                            <rect width="100" height="100" fill="#413EB1"/>
                            <rect x="70" y="78" width="30" height="30" fill="#E503B3"/>
                            <rect x="35" y="70" width="30" height="30" fill="#EEEEEE"/>
                            <rect y="78" width="30" height="30" fill="#FFAAFF"/>
                        </g>
                    </svg>                    
                    <div className="sub-division">               
                        <h2>Collaboration</h2>
                        <p>Our teams passion and dedication to the <br />
                            work is evident in the seamless intregration
                            <br />and execution of our projects.
                        </p>
                    </div>
                    <svg className="fff" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_120_2052" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                            <rect width="100" height="100" fill="#3A4269"/>
                        </mask>
                        <g mask="url(#mask0_120_2052)">
                            <circle cx="34" cy="50" r="15" fill="#A45BA1"/>
                            <circle cx="52" cy="68" r="15" fill="#A45BA1"/>
                            <circle cx="70" cy="50" r="15" fill="#A45BA1"/>
                            <circle cx="52" cy="32" r="15" fill="#A45BA1"/>
                        </g>
                    </svg>                   
                    <div className="sub-division">
                        <h2>
                            Efficiency and Agility
                        </h2>
                        <p>Our team's flexibility and expertise allows to navigate any challenge that arises,
                            ensuring <br />your project is delivered on time and on budget.
                        </p> 
                    </div>
                </div>
                <div className="division">
                    <svg className="fff" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_120_2037" style={{ maskType: 'alpha' }}  maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                            <rect width="100" height="100" fill="#DED373"/>
                        </mask>
                        <g mask="url(#mask0_120_2037)">
                            <path d="M13 78L25.9904 100.5H0.00961876L13 78Z" fill="#DED373"/>
                            <path d="M40 78L52.9904 100.5H27.0096L40 78Z" fill="#DED373"/>
                            <path d="M67 78L79.9904 100.5H54.0096L67 78Z" fill="#DED373"/>
                            <path d="M94 78L106.99 100.5H81.0096L94 78Z" fill="#DED373"/>
                            <path d="M39.4805 77.9904L26.4901 100.49L13.4997 77.9904L39.4805 77.9904Z" fill="#DED373"/>
                            <path d="M12.4795 77.9904L-0.510891 100.49L-13.5013 77.9904L12.4795 77.9904Z" fill="#DED373"/>
                            <path d="M66.4805 77.9904L53.4901 100.49L40.4997 77.9904L66.4805 77.9904Z" fill="#DED373"/>
                            <path d="M93.4805 77.9904L80.4901 100.49L67.4997 77.9904L93.4805 77.9904Z" fill="#DED373"/>
                            <path d="M120.48 77.9904L107.49 100.49L94.4997 77.9904L120.48 77.9904Z" fill="#DED373"/>
                        </g>
                    </svg>
                    <div className="sub-division">
                        <h2>Design-Driven Innovations</h2>
                        <p>Our focus on innovative design principles means<br /> 
                            your product will stand out in a crowded marketplace,
                            creating a memorble user experience.
                            
                        </p> 
                    </div>
                    <svg className="fff" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_120_2063" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                            <rect width="100" height="100" fill="#5182E6"/>
                        </mask>
                        <g mask="url(#mask0_120_2063)">
                            <circle cx="50" cy="39" r="15" fill="#EB4B98"/>
                            <path d="M50 54L62.9904 76.5H37.0096L50 54Z" fill="#EB4B98"/>
                        </g>
                    </svg>
                    <div className="sub-division">
                        <h2>Diverse Prespectives, Unmatched Reasult</h2>
                        <p>Our team's diverse backgrounds and experiences result in unique solutions
                        that meet the needs of a wide range of customers.
                        </p> 
                    </div>  
                </div>
            </div>
        </div>    
  )
}
