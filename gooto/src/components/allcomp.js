import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Destination from './Destination';
import SocialMedia from './SocialMedia';
import Footer from './Footer';
import './allcomp.css'

export default function Allcomp(){
    return(
        <div className='allcomp'>
            <Navbar />
            <Hero/>
            <Destination/>
            <SocialMedia/>
            <Footer/>

        </div>
    )
}