import React from 'react'
import DeckComponent from "../component/deck";
import Nav from '../component/nav';
import Hero from '../component/hero';
import Features from '../component/features';
import Call from '../component/call';
import Benefits from '../component/benefits';
import Services from '../component/services';
import Pricing from '../component/pricing';
import Footer from '../component/footer';

function Home() {
  return (
    <>

        <Nav/>

        <Hero/>

        <DeckComponent/>
        
        <Features/>

        <Call/>

        <Benefits/>

        <Services/>

        <Pricing/>


        <Footer/>
    </>
  )
}

export default Home;