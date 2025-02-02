import React from 'react'

import { RiTailwindCssFill } from 'react-icons/ri';
import { SiPhotopea } from 'react-icons/si';
import { GrGithub } from 'react-icons/gr';
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaLinkedin, FaReact } from 'react-icons/fa';


function Skills() {
    return (
        <>
            <div className='relative overflow-y-hidden'>
                <img  className='absolute top-[-70px] h-[45px] right-[40px]' src="/img/flaticons/falling-star.png" alt="" />
                <p className='text-center text-[2.5em] text-white'>Skills</p>
            </div>
            <div className='font-josefin  overflow-y-hidden  text-white w-[95%] bg-black border-[3px] border-white m-[40px] p-[40px] rounded-3xl   items-center mx-[auto]'>

                <div className=' flex flex-wrap justify-around gap-[20px]'>
                    <div data-aos="fade-up" data-aos-delay="100" className=' cursor-pointer flex flex-col items-center justify-center'>
                        <FaHtml5 className=' text-[3em] bp600:text-[7em] text-[#DD4B25] hover:scale-125 transition-all duration-200' />
                        <p className='text-center'>HTML5</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className=' cursor-pointer flex flex-col items-center justify-center'>
                        <FaCss3Alt className='text-[3em] bp600:text-[7em] text-[#254BDD] hover:scale-125 transition-all duration-200' />
                        <p className='text-center'>CSS3</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" className=' cursor-pointer flex flex-col items-center justify-center'>
                        <FaJsSquare className='text-[3em] bp600:text-[7em] text-[#EFD81D] hover:scale-125 transition-all duration-200' />
                        <p className='text-center'>JS</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className=' cursor-pointer flex flex-col items-center justify-center'>
                        <RiTailwindCssFill className='text-[3em] bp600:text-[7em] text-[#00B3D1] hover:scale-125 transition-all duration-200' />
                        <p className='text-center'>Tailwind</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" className=' cursor-pointer flex flex-col items-center justify-center'>
                        <FaReact className='text-[3em] bp600:text-[7em] text-[#00D5F7] hover:scale-125 transition-all duration-200' />
                        <p className='text-center'>React</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className=' cursor-pointer flex flex-col items-center justify-center'>
                        <FaGitAlt className='text-[3em] bp600:text-[7em] text-[#E84D31] hover:scale-125 transition-all duration-200' />
                        <p className='text-center'>Git</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="700" className=' cursor-pointer flex flex-col items-center justify-center'>
                        <GrGithub className='text-[3em] bp600:text-[7em] text-white hover:scale-125 transition-all duration-200' />
                        <p className='text-center'>HTML5</p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="800" className=' cursor-pointer flex flex-col items-center justify-center'>
                        <SiPhotopea className='text-[3em] bp600:text-[7em] text-[#179F92] hover:scale-125 transition-all duration-200' />
                        <p className='text-center'>Photopea</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Skills
