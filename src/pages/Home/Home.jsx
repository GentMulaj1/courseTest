import React, { useEffect } from 'react'
import './Home.css'

import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div className='Home'>
        <div className="bgImage"></div>
        

        <div data-aos="fade-up" className='aosCard leftFlex'>
            Fade Up
        </div>

        <div data-aos="fade-down" className='aosCard rightFlex'>
            Fade Down 
        </div>

        <div data-aos="fade-right" className='aosCard leftFlex'>
            Fade Right 
        </div>

        <div data-aos="fade-left" className='aosCard rightFlex'>
            Fade left
        </div>

        <div data-aos="fade-up-right" className='aosCard leftFlex'>
            Fade Up Right
        </div>

        <div data-aos="fade-up-left" className='aosCard rightFlex'>
            Fade Up Left
        </div>

        <div data-aos="fade-down-right" className='aosCard leftFlex'>
            Fade Down Right 
        </div>

        <div data-aos="fade-down-left" className='aosCard rightFlex'>
            Fade Down Left 
        </div>

        <div className="bgFixed">
            <p className='flipAnimationText'>Flip Animation</p>
        </div>

        <div data-aos="flip-left" className='aosCard leftFlex'>
            Flip Left
        </div>

        <div data-aos="flip-right" className='aosCard rightFlex'>
            Flip Right
        </div>

        <div data-aos="flip-up" className='aosCard leftFlex'>
            Flip Up
        </div>

        <div data-aos="flip-down" className='aosCard rightFlex'>
            Flip Down
        </div>


    </div>
  )
}

export default Home