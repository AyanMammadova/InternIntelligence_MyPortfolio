import React from 'react'

function About() {
    return (
        <>
            <div className='relative overflow-y-hidden'>
                <img className='absolute top-[-70px] h-[45px] right-[40px]' src="/img/flaticons/falling-star.png" alt="" />
                <p className='text-center text-[2.5em] text-white'>About me</p>
            </div>
            <div className='font-josefin overflow-y-hidden text-white w-[95%] bg-black border-[3px] border-white m-[40px] md:p-[40px] rounded-3xl   items-center mx-[auto]'>
                <p className='text-[1.3em] p-[10px]'>Hi, I’m <span className='text-purple-500'>Ayan Məmmədova</span> I’m a passionate front-end developer with a knack for crafting clean, responsive, and user-friendly websites.
                    I’m currently in my third year pursuing a degree in Information Technology at UNEC,
                    where I’m expanding my knowledge of modern development practices and innovative web technologies.

                    I enjoy building responsive, accessible websites and applications that provide seamless user experiences.
                    
                </p>
                <p className='text-[1.4em] text-purple-500 px-[10px]'>Here’s a quick look at my skillset:</p>
                <div className='text-[1.3em]  p-[20px] flex-wrap gap-[20px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>Core  Technologies  </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>HTML</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>CSS</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>JS</p>
                    </div>
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>JS Libraries & Frameworks </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>React.js</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>React Router</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>Context API</p>
                    </div>
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>Visual    Design</span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>CSS3</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>Tailwind CSS</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>Bootstrap</p>
                    </div>
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>API   Integration </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>Fetch API</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>RESTful APIs</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>CRUD Operations</p>
                    </div>
                    
                    <div data-aos="fade-up" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>Deployment </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>Vercel</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>Netlify</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>GitHub Actions</p>
                    </div>
                    <div data-aos="fade-right" className='flex flex-col gap-[5px] text-center mx-auto  w-[90%] sm:w-[280px] '>
                        <span className='text-purple-400'>Version   Control </span>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg '>Git</p>
                        <p className='border-[1px] border-white hover:bg-white/15 transition-all duration-200 cursor-pointer  rounded-lg'>GitHub</p>
                    </div>
                    
                   
                </div>
            </div>
        </>
    )
}

export default About
