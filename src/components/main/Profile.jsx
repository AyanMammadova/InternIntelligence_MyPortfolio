import React from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BiLogoGmail } from 'react-icons/bi';

function Profile() {
    return (
        <div className='bp900:flex overflow-y-hidden font-josefin  text-white w-[95%] bg-black  border-[3px] border-white m-[40px] p-[10px] md:p-[40px] rounded-3xl   items-center mx-[auto]'>

            <div  className='md:w-[250px] mx-auto w-[200px] h-[200px] md:h-[250px] border-2 rounded-full p-[3px]'>
                <img className='rounded-full border-2  w-[100%] h-[100%] object-cover' src="/img/profil.png" alt="" />
            </div>
            <div data-aos="fade-left" className='z-10 bp900:w-[70%] bp900:ml-[50px] text-center bp900:text-start'>
                <p className='text-[1.5em] md:text-[2em] '>Hi,I'm <span className='text-purple-400'>Ayan</span> Mammadova</p>
                <p className='text-[1.2em] md:text-[1.7em] text-purple-400'>Front-end Developer</p>
                <p className='text-[1em] py-[20px]'>
                    As a front-end developer and third-year Information Technology student at UNEC, my goal is to create stunning, functional web applications. Let’s collaborate!
                </p>
                <div className='flex py-[10px] justify-center bp900:justify-normal w-[100%] gap-[10px] text-[1.2em]'>
                    <Link
                        to={'https://www.linkedin.com/in/ayan-m%C9%99mm%C9%99dova-90193527b/'}
                        target='blank'
                        className='border-[1px] bg-black  rounded-full flex justify-center items-center p-[3px]'>
                        <FaLinkedin />
                    </Link>
                    <Link
                        to={'https://github.com/AyanMammadova'}
                        target='blank'
                        className='border-[1px] bg-black  rounded-full flex justify-center items-center p-[3px]'>
                        <FaGithub />
                    </Link>
                    <Link
                        to={'mailto:ayan.md@div.edu.az'}
                        target='blank'
                        className='border-[1px] bg-black  rounded-full flex justify-center items-center p-[3px]'>
                        <BiLogoGmail />
                    </Link>
                </div>
                <div>
                    <a href="/CVAyanMammadova.pdf" download="CVAyanMammadova.pdf">
                        <button className="download-button bg-black border-white border-2 py-[3px] rounded mt-[10px] px-[10px]">Download My CV</button>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default Profile
