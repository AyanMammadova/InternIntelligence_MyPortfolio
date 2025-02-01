import React, { useState } from 'react'
import { CiApple } from 'react-icons/ci';
import { FaCss3Alt, FaGithub, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { GiClothes } from 'react-icons/gi';
import { IoIosLink } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiNetlify } from 'react-icons/si';
import { Link } from 'react-router-dom';

function Projects() {

    return (
        <>
            <div className='relative '>
                <img className='absolute top-[-70px] h-[45px] right-[40px]' src="/img/flaticons/falling-star.png" alt="" />
                <p className='text-center text-[2.5em] text-white'>My Projects</p>
            </div>
            <div className='font-josefin gap-[30px] flex flex-col  text-white w-[95%] bg-black border-[3px] border-white m-[40px] md:p-[40px] rounded-3xl   items-center mx-[auto]'>
                <div className='  gap-[20px] sm:h-[50vh] items-center   sm:flex  p-[10px] rounded-md  '>
                    <div className='sm:w-[50%] overflow-hidden  rounded-2xl  relative group'>
                        <div className='absolute inset-0  transition-all duration-300   group-hover:bg-purple-500/15 rounded-2xl'>
                            <Link
                                className='hidden  group-hover:block transition-all duration-300'
                                target='_blank'
                                to={'https://mdvayanlunariaecommerce.netlify.app/'}>
                                <div className='flex h-[300px]  justify-center items-center '><IoIosLink />Go to site</div>
                            </Link>
                        </div>
                        <img className='group-hover:scale-105x  w-[100%] object-cover sm:min-h-[300px] transition-all duration-300 rounded-2xl' src="/img/projectimgs/lunaria1.png" alt="" />
                    </div>
                    <div className='sm:w-[50%]'>
                        <Link target='_blank' to={'https://mdvayanlunariaecommerce.netlify.app/'} className='md:text-[2.5em] text-[1.3em] font-bold font-cormorant text-purple-400 flex items-center gap-[10px]'><IoIosLink className='text-[.7em]' />Lunaria</Link>
                        <div className='flex gap-[10px] md:text-[1.5em]'>
                            <span className='text-[.9em] md:text-[1.2rem]'>Technologies used:</span>
                            <RiTailwindCssFill />
                            <FaReact />
                            <FaHtml5 />
                            <FaCss3Alt />
                            <SiNetlify />
                            <FaJsSquare />
                        </div>
                        <p className='text-purple-300 inline'>Lunaria is a modern e-commerce site for men's and women's clothing, featuring user authentication, a dynamic product catalog from an API, a shopping basket, and a streamlined checkout process.
                            <GiClothes className='inline text-white' />
                        </p>
                        <div className='flex gap-[10px]   pt-[17px] mt-[10px]'>
                            <Link target='_blank' to={'https://github.com/AyanMammadova/Lunaria_ecommerce'} className='border-white border-2 p-[5px] rounded-xl hover:text-purple-400 transition-all duration-200'>Github Repo</Link>
                            <Link target='_blank' to={'https://mdvayanlunariaecommerce.netlify.app/'} className='border-white border-2 p-[5px] rounded-xl hover:text-purple-400 transition-all duration-200'>Demo Link</Link>
                        </div>
                    </div>
                </div>
                <div className=' gap-[20px] sm:h-[50vh] items-center   sm:flex  p-[10px] rounded-md  '>
                    <div className='sm:w-[50%]  overflow-hidden  rounded-2xl  relative group'>
                        <div className='absolute inset-0  transition-all duration-300   group-hover:bg-orange-500/15 rounded-2xl'>
                            <Link
                                className='hidden  group-hover:block transition-all duration-300'
                                target='_blank'
                                to={'https://neptunsecondtrylastchance.vercel.app/'}>
                                <div className='flex h-[300px]  justify-center items-center '><IoIosLink />Go to site</div>
                            </Link>
                        </div>
                        <img className='group-hover:scale-105x  w-[100%] object-cover sm:min-h-[300px] transition-all duration-300 rounded-2xl'
                            src="/img/projectimgs/neptun1.png" alt="" />
                    </div>
                    <div className='sm:w-[50%] order-[initial] sm:-order-1'>
                        <Link target='_blank' to={'https://neptunsecondtrylastchance.vercel.app/'} className='md:text-[2.5em] text-[1.3em] font-bold font-cormorant text-orange-400 flex items-center gap-[10px]'><IoIosLink className='text-[.7em]' />Neptunclone</Link>
                        <div className='flex gap-[10px] md:text-[1.5em]'>
                            <span className='text-[.9em] md:text-[1.2rem]'>Technologies used:</span>
                            <RiTailwindCssFill />
                            <FaReact />
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaGithub />
                            <FaJsSquare />
                        </div>
                        <p className='text-orange-300 inline'>
                            Neptun is an online grocery shopping platform that offers a seamless experience for browsing, adding products to a cart, and completing purchases.

                        </p>
                        <div className='flex gap-[10px]   pt-[17px] mt-[10px]'>
                            <Link target='_blank' to={'https://github.com/AyanMammadova/NeptunClone'} className='border-white border-2 p-[5px] rounded-xl hover:text-orange-400 transition-all duration-200'>Github Repo</Link>
                            <Link target='_blank' to={'https://neptunsecondtrylastchance.vercel.app/'} className='border-white border-2 p-[5px] rounded-xl hover:text-orange-400 transition-all duration-200'>Demo Link</Link>
                        </div>
                    </div>

                </div>
                <div className='  gap-[20px] sm:h-[50vh] items-center   sm:flex  p-[10px] rounded-md  '>
                    <div className='sm:w-[50%] overflow-hidden  rounded-2xl  relative group'>
                        <div className='absolute inset-0  transition-all duration-300   group-hover:bg-blue-500/15 rounded-2xl'>
                            <Link
                                className='hidden  group-hover:block transition-all duration-300'
                                target='_blank'
                                to={'https://oxu-az-succes.vercel.app/'}>
                                <div className='flex  h-[300px] justify-center items-center '><IoIosLink />Go to site</div>
                            </Link>
                        </div>
                        <img className='group-hover:scale-105x  w-[100%] object-cover sm:min-h-[300px] transition-all duration-300 rounded-2xl' src="/img/projectimgs/oxuaz1.png" alt="" />
                    </div>
                    <div className='sm:w-[50%]'>
                        <Link target='_blank' to={'https://oxu-az-succes.vercel.app/'} className='md:text-[2.5em] text-[1.3em] font-bold font-cormorant text-blue-400 flex gap-[10px] items-center  '><IoIosLink className='text-[.7em]' />Oxu.az</Link>
                        <div className='flex gap-[10px] md:text-[1.5em]'>
                            <span className='text-[.9em] md:text-[1.2rem]'>Technologies used:</span>
                            <RiTailwindCssFill />
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaGithub/>
                            <FaJsSquare />
                        </div>
                        <p className='text-blue-300 inline'>
                            Oxu.az is a news platform with an admin panel that allows for content management, including post creation, editing, and deletion by operators.
                            It ensures efficient news delivery with a user-friendly interface and streamlined moderation tools.
                        </p>
                        <div className='flex gap-[10px]   pt-[17px] mt-[10px]'>
                            <Link target='_blank' to={'https://github.com/AyanMammadova/OxuAz'} className='border-white border-2 p-[5px] rounded-xl hover:text-blue-400 transition-all duration-200'>Github Repo</Link>
                            <Link target='_blank' to={'https://oxu-az-succes.vercel.app/'} className='border-white border-2 p-[5px] rounded-xl hover:text-blue-400 transition-all duration-200'>Demo Link</Link>
                        </div>
                    </div>
                </div>
                <div className=' gap-[20px] sm:h-[50vh] items-center   sm:flex  p-[10px] rounded-md  '>
                    <div className='sm:w-[50%]  overflow-hidden  rounded-2xl  relative group'>
                        <div className='absolute inset-0  transition-all duration-300   group-hover:bg-green-500/15 rounded-2xl'>
                            <Link
                                className='hidden  group-hover:block transition-all duration-300'
                                target='_blank'
                                to={'https://freelance-trade-site.vercel.app/'}>
                                <div className='flex h-[300px]  justify-center items-center '><IoIosLink />Go to site</div>
                            </Link>
                        </div>
                        <img className='group-hover:scale-105x  w-[100%] object-cover sm:min-h-[300px] transition-all duration-300 rounded-2xl'
                            src="/img/projectimgs/trader1.png" alt="" />
                    </div>
                    <div className='sm:w-[50%] order-[initial] sm:-order-1'>
                        <Link target='_blank' to={'https://freelance-trade-site.vercel.app/'} className='md:text-[2.5em] text-[1.3em] font-bold font-cormorant text-green-400 flex items-center gap-[10px]'><IoIosLink className='text-[.7em]' />Trader</Link>
                        <div className='flex gap-[10px] md:text-[1.5em]'>
                            <span className='text-[.9em] md:text-[1.2rem]'>Technologies used:</span>
                            <FaHtml5 />
                            <FaCss3Alt />
                            <FaGithub />
                            <FaJsSquare />
                        </div>
                        <p className='text-green-300 inline'>
                        Your trading consulting website provides expert insights, market analysis, and personalized strategies to help clients make informed investment decisions.
                        </p>
                        <div className='flex gap-[10px]   pt-[17px] mt-[10px]'>
                            <Link target='_blank' to={'https://github.com/AyanMammadova/FreelanceTradeSite'} className='border-white border-2 p-[5px] rounded-xl hover:text-green-400 transition-all duration-200'>Github Repo</Link>
                            <Link target='_blank' to={'https://freelance-trade-site.vercel.app/'} className='border-white border-2 p-[5px] rounded-xl hover:text-green-400 transition-all duration-200'>Demo Link</Link>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Projects
