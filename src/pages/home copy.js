import React from 'react'

function Home() {
  return (
    <>
        

        {/* Section-2 */}
        <div className="deck-content">
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

        {/* Section-3 */}
        <div className="Section_3">
            <div className="deck-content">
                <p>
                    <span className="deck-span"> Featured Projects</span>               
                    Have a look at these cool designs!
                </p>   
                <button className="btn_view">View our work</button>      
            </div>
            <div className="photo-div">
                <div className="photo-section_1">
                    <img className="shadow" src= './Images/cad.png' alt="img" />
                    <img className="shadow"src='./Images/cad4.png' alt="img" />
                </div>
                <div className="photo-section_1">
                    <img className="shadow" src='./Images/cad5.png' alt="img" />
                    <img className="shadow" src='./Images/cad3.png'alt="img" />
                </div>
                <div className="photo-section_1">
                    <img className="shadow" src='./Images/cad2.png'alt="img" />
                    <img className="shadow" src='./Images/cad6.png'alt="img" />
                </div>
            </div>
        </div>       
        <div className="pink-container">
            <div className="pink-box">
                <svg className="ttt" width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.286438 20.248V13.696C0.286438 11.248 0.718438 8.992 1.58244 6.928C2.44644 4.864 3.91044 2.776 5.97444 0.663996L9.71844 3.616C8.18244 5.2 7.10244 6.664 6.47844 8.008C5.85444 9.352 5.54244 10.792 5.54244 12.328L3.31044 10.24H10.3664V20.248H0.286438ZM14.6144 20.248V13.696C14.6144 11.248 15.0464 8.992 15.9104 6.928C16.7744 4.864 18.2384 2.776 20.3024 0.663996L24.0464 3.616C22.5104 5.2 21.4304 6.664 20.8064 8.008C20.1824 9.352 19.8704 10.792 19.8704 12.328L17.6384 10.24H24.6944V20.248H14.6144Z" fill="#081BC0"/>
                </svg>
                <p>Jupita being an expert in digital transformation were able
                    <br />to articulate and implement our unique solutions with 
                    <br />a high degree of competence and standard which we are
                    <br /> thankful for.
                </p>
                <h1 className="bit_ceo">CEO Bitmama</h1>            
            </div>
        </div>

        {/* Section-4 ...*/}
        <div className="deck-content">
            <p>
                <span className="deck-span">Get Started Easily</span>               
                We make it simple to get started with our easy 
                <br />schedule-a-meeting process
            </p>     
        </div>
        <div className="row-1">
            <div className="frf-xxx">
                <svg className="photo-row" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_120_2539" style={{ maskType: 'alpha' }}  maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <rect width="100" height="100" fill="#413EB1"/>
                    </mask>
                    <g mask="url(#mask0_120_2539)">
                        <rect width="100" height="100" fill="#413EB1"/>
                        <rect x="70" y="78" width="30" height="30" fill="#E503B3"/>
                        <rect x="35" y="70" width="30" height="30" fill="#EEEEEE"/>
                        <rect y="78" width="30" height="30" fill="#FFAAFF"/>
                    </g>
                </svg> 
                <p>
                    1.<br />
                    <span className="bbb">Contact us</span>
                    <br />
                    <br />Use the schedule-a-meeting feature to contact us.
                </p> 
            </div>

            <div className="frf-xxx">
                <svg className="photo-row" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#3A4269"/>
                    <mask id="mask0_351_237" style={{ maskType: 'alpha' }}  maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <rect width="100" height="100" fill="#3A4269"/>
                    </mask>
                    <g mask="url(#mask0_351_237)">
                        <circle cx="34" cy="50" r="15" fill="#A45BA1"/>
                        <circle cx="52" cy="68" r="15" fill="#A45BA1"/>
                        <circle cx="70" cy="50" r="15" fill="#A45BA1"/>
                        <circle cx="52" cy="32" r="15" fill="#A45BA1"/>
                    </g>
                </svg>
                <p>
                    2.<br />
                    <span className="bbb">Flexile Subscription Plans</span>
                    <br />
                    <br />Choose from our range of affordable plans to fit your<br /> needs and budget.
                    We offer plans for every price point.
                    <br />  
                </p>
            </div>
        </div>
        <div className="row-1">
            <div className="frf-xxx">
                <svg className="photo-row" width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.214844" width="100" height="100" fill="#5182E6"/>
                    <mask id="mask0_351_236" style={{ maskType: 'alpha' }}  maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="101">
                        <rect y="0.214844" width="100" height="100" fill="#5182E6"/>
                    </mask>
                    <g mask="url(#mask0_351_236)">
                        <circle cx="50" cy="39.2148" r="15" fill="#EB4B98"/>
                        <path d="M50 54.2148L62.9904 76.7148H37.0096L50 54.2148Z" fill="#EB4B98"/>
                    </g>
                </svg>
                <p>
                    3.<br />
                    <span className="bbb">Hassle-free product revision</span>
                    <br />
                    <br />Request as many revisions as you need with 
                    ease <br />using our Trello board.
                    Simply add your request <br />and our team will get to work.
                </p>                     
            </div>

            <div className="frf-xxx" >
                <svg className="photo-row" width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.214844" width="100" height="100" fill="#E503B3"/>
                    <path d="M69.0062 31.0919L54.1045 79.0617L21.0364 45.9936L69.0062 31.0919Z" fill="#023463"/>
                </svg>                                       
                <p>
                    4.<br />
                    <span className="bbb">Fast Turnaround Time</span>
                    <br />
                    <br />Our team works quickly to deliver your designs in 
                    <br />just a few business days on average, Monday-Friday.
                </p>
            </div>
        </div>
        <div className="row-1">
            <div className="frf-xxx">
                <svg className="photo-row" width="100" height="101" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.429688" width="100" height="100" fill="#FFAAFF"/>
                    <mask id="mask0_120_2573" style={{ maskType: 'alpha' }}  maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <rect width="100" height="100" fill="#FFAAFF"/>
                    </mask>
                    <g mask="url(#mask0_120_2573)">
                        <circle cx="50" cy="50" r="39" fill="#DED373"/>
                        <path d="M24 61C44.4576 85.8478 56.0694 85.2619 77 61" stroke="black" stroke-width="5"/>
                        <path d="M21 63.5L27 58.5" stroke="black" stroke-width="6"/>
                        <path d="M80 63L74 58" stroke="black" stroke-width="6"/>
                    </g>
                </svg> 
                <p>
                    5.
                    <br />
                    <span className="bbb">Satisfaction Guaranteed</span>
                    <br />
                    <br />We strive for your satisfaction and we will revise your
                    <br />product until you're 100% satisfied with the result.
                </p>                    
            </div>      
        </div>

        {/* Section-5 BENEFIT */}
        <div className="section_7">
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

        {/* Section-6 */}
        <div className="section_8">
            <div className="sect-content">
                <p>
                    <span className="section-span"> Services</span>               
                    We offer the best services with affordable rates
                </p>     
            </div>
            <div className="services_container">
                <div className="column-xxx">
                    <div className="column-section">
                        <h2>Websites</h2>
                    </div>
                    <div className="column-section">
                        <h2>Dashboards</h2>
                    </div>
                    <div className="column-section">
                        <h2>Design System</h2>
                    </div>
                    <div className="column-section">
                        <h2>Packages</h2>
                    </div>
                    <div className="column-section">
                        <h2>Animations</h2>
                    </div>
                    <div className="column-section-xx">
                        <h2>Social Media<br />
                            Graphics
                        </h2>
                    </div>
                </div>
                <div className="column-xxx">
                    <div className="column-section">
                        <h2>Mobile Apps</h2>
                    </div>
                    <div className="column-section">
                        <h2>Wireframes</h2>
                    </div>
                    <div className="column-section">
                        <h2>Prototyping</h2>
                    </div>
                    <div className="column-section">
                        <h2>Branding & Logo</h2>
                    </div>
                    <div className="column-section">
                        <h2>Bronchures</h2>
                    </div>
                    <div className="column-section-xx">
                        <h2>
                            3Ds
                        </h2>
                    </div>
                </div>
                <div className="column-xxx">
                    <div className="column-section">
                        <h2>Web3 designs</h2>
                    </div>
                    <div className="column-section">
                        <h2>Business Cards</h2>
                    </div>
                    <div className="column-section">
                        <h2>Pitch Decks</h2>
                    </div>
                    <div className="column-section">
                        <h2>Illustrations</h2>
                    </div>
                    <div className="column-section">
                        <h2>Branding Guides</h2>
                    </div>
                    <div className="column-section-xx">
                        <h2>
                            SAAS
                        </h2>
                    </div>
                </div> 
            </div>
        </div> 

        {/* Section-7 */}
        <div className="section_10">
            <div className="sect-content">
                <p>
                    <span className="sect-span"> Simple, transparent pricing</span>               
                    Choose a plan that best suits you.
                </p>     
            </div>
            <div className="card_body">
                <div className="card-yyy">
                    <div id="pop">Popular</div>
                    <div className="icon-row">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="72" fill="white"/>
                            <rect x="17" y="17" width="18.4865" height="38" fill="#FFE2E2"/>
                            <rect x="35.4863" y="17" width="19.5135" height="38" fill="#FFC8C8"/>
                            <rect x="35.4863" y="35.4863" width="19.5135" height="19.5135" fill="#E9A4A4"/>
                        </svg>     
                        <h2 className="icontext">Monthly</h2>  
                    </div>
                    <p>No minimum commitment. Pause 
                        <br />or cancel anytime.
                    </p>
                    <h1>$2,195 <span>/m</span></h1>
                    <h3>Perks</h3>
                    <div className="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_104)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="white"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_104">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Unlimited requests</p>   
                    </div>
                    <div className="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_104)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="white"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_104">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Unlimited  brands</p>   
                    </div>
                    <div className="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_104)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="white"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_104">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Unlimited Users</p>   
                    </div>
                    <div className="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_104)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="white"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_104">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Unlimited Users</p>   
                    </div> <div className="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_104)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="white"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_104">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Unlimited Users</p>   
                    </div>
                    <div className="check">
                        <svg width="33" height="33" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_104)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="white"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_104">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Unlimited stock photos via Shutterstock</p>   
                    </div>
                    <div className="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_104)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="white"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_104">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p>Pause or cancel anytime</p>   
                    </div>
                    <button className="btn-start">Get started</button>
                    <button className="btn-start-xxx">Book a call</button>
                </div>
                <div className="card-yyy-aa">
                    <div id="pop-x"></div>
                    <div className="icon-row">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="72" fill="#E4ECFF"/>
                            <path d="M57.1639 46.6464L57.1732 46.6413H57.1551L46.5288 40.8833L35.8849 35.1152L25.2405 40.8833L14.6143 46.6413H14.5962L14.6054 46.6464L14.5962 46.6515H14.6143L25.2405 52.4094L35.8849 58.1775L46.5288 52.4094L57.1551 46.6515H57.1732L57.1639 46.6464Z" fill="#6791FF"/>
                            <path d="M57.1639 24.5312L57.1732 24.5265H57.1551L46.5288 18.7681L35.8849 13L25.2405 18.7681L14.6143 24.5265H14.5962L14.6054 24.5312L14.5962 24.5362H14.6143L25.2405 30.2946L35.8849 36.0627L46.5288 30.2946L57.1551 24.5362H57.1732L57.1639 24.5312Z" fill="#CEDBFD"/>
                            <path d="M14.6143 24.0625V47.1151L35.8849 35.589L14.6143 24.0625Z" fill="#8EA9F0"/>
                            <path d="M57.155 24.0625V47.1151L35.8848 35.589L57.155 24.0625Z" fill="#8EA9F0"/>
                        </svg>                             
                        <h2 className="icontext-x">Quaterly</h2>  
                    </div>
                    <p className="p-txt">Save $100 per month.</p>
                    <h1>$2,195 <span>/m</span></h1>
                    <h3>Perks</h3>
                    <div id="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_44)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#1354DC"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_44">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                        <p>Unlimited requests</p>   
                    </div>
                    <div id="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_44)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#1354DC"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_44">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                        <p>Unlimited brands</p>   
                    </div>
                    <div id="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_44)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#1354DC"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_44">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                        <p>Unlimited users</p>   
                    </div>
                    <div id="check">
                        <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_44)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#1354DC"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_44">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                        <p>Unlimited stock photos via Shutterstock</p>   
                    </div>
                    <div className="btn-btn">
                        <button className="start">Get started</button>
                        <button className="btn-xxx">Book a call</button>
                    </div>
                </div>
                
                <div className="card-yyy-aa">
                    <div id="pop-x"></div>
                    <div className="icon-row">
                        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="72" height="72" fill="#5182E6"/>
                            <path d="M36 17C30.9609 17 26.1282 19.0018 22.565 22.565C19.0018 26.1282 17 30.9609 17 36C17 41.0391 19.0018 45.8718 22.565 49.435C26.1282 52.9982 30.9609 55 36 55L36 36V17Z" fill="#1354DC"/>
                            <path d="M36 55C41.0391 55 45.8718 52.9982 49.435 49.435C52.9982 45.8718 55 41.0391 55 36C55 30.9609 52.9982 26.1282 49.435 22.565C45.8718 19.0018 41.0391 17 36 17L36 36L36 55Z" fill="#CEDBFD"/>
                        </svg>                                                 
                        <h2 className="icontext-x">Yearly</h2>  
                    </div>
                    <p className="p-txt">Save $190 per month.</p>
                    <h1>$2,005 <span>/m</span></h1>
                    <h3>Perks</h3>
                    <div id="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_44)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#1354DC"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_44">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                        <p>Unlimited requests</p>   
                    </div>
                    <div id="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_44)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#1354DC"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_44">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                        <p>Unlimited brands</p>   
                    </div>
                    <div id="check">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_44)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#1354DC"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_44">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                        <p>Unlimited users</p>   
                    </div>
                    <div id="check">
                        <svg width="30" height="30" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_357_44)">
                            <path d="M13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26Z" fill="#1354DC"/>
                            <path d="M7.11682 13.8406L10.4786 17.2024L18.8832 8.79785" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_357_44">
                            <rect width="26" height="26" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>                        
                        <p>Unlimited stock photos via Shutterstock</p>   
                    </div>
                    <div className="btn-btn">
                        <button className="start">Get started</button>
                        <button className="btn-xxx">Book a call</button>
                    </div>
                </div>
            </div>
            <div className="black-sector">
                <h1>Talk to us</h1>
                <h2>Learn more about the best pricing plan that works for you</h2>
                <button id="btn-start">Book a call</button>
            </div>
            <div className="null"></div>
        </div>
        <div className="design-container">
            <svg     width="155" height="156" viewBox="0 0 155 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_120_2482" style={{ maskType: 'alpha' }}  maskUnits="userSpaceOnUse" x="4" y="-148" width="147" height="296">
                    <rect x="151" y="-148" width="295.985" height="146.721" transform="rotate(90 151 -148)" fill="#C4C4C4"/>
                </mask>
                <g mask="url(#mask0_120_2482)">
                    <path d="M3.27808 -420.42L-519.452 108.695" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M262.707 -164.121L-260.023 364.994" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M29.221 -394.79L-493.509 134.325" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M288.65 -138.491L-234.08 390.623" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M55.1639 -369.16L-467.566 159.954" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M314.593 -112.861L-208.137 416.253" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M81.1068 -343.53L-441.623 185.584" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M340.536 -87.2314L-182.194 441.883" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M107.05 -317.9L-415.68 211.214" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M366.479 -61.6016L-156.251 467.513" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M132.993 -292.271L-389.737 236.844" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M392.422 -35.9717L-130.308 493.143" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M158.936 -266.641L-363.794 262.474" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M418.365 -10.3418L-104.365 518.773" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M184.878 -241.011L-337.851 288.104" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M444.308 15.2871L-78.4224 544.402" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M210.821 -215.381L-311.909 313.734" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M470.25 40.918L-52.4795 570.033" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M236.764 -189.751L-285.966 339.364" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M496.193 66.5469L-26.5367 595.662" stroke="#CEDBFD" stroke-width="9.32905"/>
                </g>
            </svg>
            <h1>We would love to design 
                <br />something with you
            </h1>
            <button className="bold_btn">Get started</button>
            <svg className="line-xyz" width="155" height="156" viewBox="0 0 155 156" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_120_2482" style={{ maskType: 'alpha' }}  maskUnits="userSpaceOnUse" x="4" y="-148" width="147" height="296">
                    <rect x="151" y="-148" width="295.985" height="146.721" transform="rotate(90 151 -148)" fill="#C4C4C4"/>
                </mask>
                <g mask="url(#mask0_120_2482)">
                    <path d="M3.27808 -420.42L-519.452 108.695" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M262.707 -164.121L-260.023 364.994" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M29.221 -394.79L-493.509 134.325" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M288.65 -138.491L-234.08 390.623" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M55.1639 -369.16L-467.566 159.954" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M314.593 -112.861L-208.137 416.253" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M81.1068 -343.53L-441.623 185.584" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M340.536 -87.2314L-182.194 441.883" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M107.05 -317.9L-415.68 211.214" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M366.479 -61.6016L-156.251 467.513" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M132.993 -292.271L-389.737 236.844" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M392.422 -35.9717L-130.308 493.143" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M158.936 -266.641L-363.794 262.474" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M418.365 -10.3418L-104.365 518.773" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M184.878 -241.011L-337.851 288.104" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M444.308 15.2871L-78.4224 544.402" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M210.821 -215.381L-311.909 313.734" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M470.25 40.918L-52.4795 570.033" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M236.764 -189.751L-285.966 339.364" stroke="#CEDBFD" stroke-width="9.32905"/>
                    <path d="M496.193 66.5469L-26.5367 595.662" stroke="#CEDBFD" stroke-width="9.32905"/>
                </g>
            </svg>
        </div>

        {/* Footer */}
        <div className="footer_area">
            <div className="foot_links">
                <div id="footer-links">
                    <h1>Social</h1>
                    <a href="#">Twitter</a>
                    <a href="#">Instgram</a>
                    <a href="#">LinkedIn</a>
                </div>
                <div id="footer-links">
                    <h1>Support</h1>
                    <a href="#">Contact us</a>
                    <a href="#x">Privacy Policy</a>
                </div>
                <div id="footer-links"></div>
                <div className="foot-txt">
                    <h1>Jupita is headquartered in
                        <br /> Delaware
                        <br /><br />
                        <span className="little-foot_txt">©2023 Jupita, All rights reserved</span>
                    </h1>
                </div>
            </div>

            <div className="footer_pic">
                <svg width="505" height="800" viewBox="0 0 500 798" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" width="607" height="912" fill="#FFC3C3"/>
                    <path d="M298 442C298 360.262 364.262 294 446 294H594V911.5H298L298 442Z" fill="#413EB1"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M593.488 159.15C593.827 155.143 594 151.091 594 147C594 142.909 593.827 138.857 593.488 134.85V0H443.535L443.542 0.00741072C443.029 0.00247412 442.515 0 442 0C358.053 0 290 65.8141 290 147C290 228.186 358.053 294 442 294C521.485 294 586.721 234.996 593.431 159.808L593.488 159.869V159.15Z" fill="#5182E6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M298.414 589.701L296.719 446.336L296.711 446.343C296.711 445.852 296.707 445.36 296.701 444.868C295.752 364.609 229.13 300.325 147.896 301.286C66.6616 302.247 1.57786 368.088 2.52706 448.347C3.4258 524.34 63.2023 586.012 138.511 591.537L138.451 591.592L139.17 591.584C143.183 591.861 147.239 591.978 151.333 591.93C155.427 591.881 159.479 591.668 163.484 591.296L298.414 589.701Z" fill="#FD7B7E"/>
                    <path d="M290 153C290 234.738 223.738 301 142 301L1.00003 301L1 -5.2524e-06L290 -3.05176e-05L290 153Z" fill="#3A4269"/>
                    <path d="M2 739.253C2 658.002 67.5037 591.944 148.752 591.259L298 590V912H2V739.253Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.24239 77.9506C1.08185 75.9883 1 74.0037 1 72C1 69.9963 1.08185 68.0117 1.24239 66.0494V0H72.2727L72.2694 0.00363011C72.5126 0.00121194 72.7562 0 73 0C112.765 0 145 32.2355 145 72C145 111.765 112.765 144 73 144C35.3491 144 4.44803 115.1 1.2695 78.2731L1.24239 78.303V77.9506Z" fill="#CEDBFD"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M593.758 834.049C593.918 836.012 594 837.996 594 840C594 842.004 593.918 843.988 593.758 845.951L593.758 912L522.727 912L522.731 911.996C522.487 911.999 522.244 912 522 912C482.235 912 450 879.765 450 840C450 800.235 482.236 768 522 768C559.651 768 590.552 796.9 593.731 833.727L593.758 833.697L593.758 834.049Z" fill="#FFC3C3"/>
                    <ellipse cx="294.5" cy="297.5" rx="61.5" ry="62.5" fill="white"/>
                    <circle cx="297" cy="592" r="26" fill="#FFC1C1"/>
                    <circle cx="416" cy="422" r="26" fill="#FD7B7E"/>
                    <circle cx="524" cy="70" r="26" fill="#CEDBFD"/>
                </svg>                
            </div>
        </div>


    </>
  )
}

export default Home;