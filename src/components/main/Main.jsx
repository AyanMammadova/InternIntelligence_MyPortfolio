import Aos from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import Skills from './Skills';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Profile from './Profile';
import MarqueeElement from './MarqueeElement';

function Main() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className='w-[95%]'>

      </div>

      <main className='scroll-smooth' style={{ scrollPaddingTop: '200px' }}>

        <section id="home" className='pt-[140px]'>
          <Profile />
        </section>
        {/* <MarqueeElement/> */}
        <section id='education' className='pt-[50px]'>
          <Education />
        </section>
        {/* <MarqueeElement/> */}
        <section id="skills"  className='pt-[50px]'>
          <Skills />
        </section>
        {/* <MarqueeElement/> */}
        <section id="experience" className='pt-[50px]'>
          <Experience />
        </section>
        {/* <MarqueeElement/> */}
        <section id="contact" className='pt-[50px]'>
          <Contact />
        </section>
      </main>




    </>
  )
}

export default Main
