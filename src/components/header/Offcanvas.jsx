import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Offcanvas({setShowCanvas}) {
  const [activeLink, setActiveLink] = useState('home');
  return (
    <>
      <ul className='text-[25px] z-50  bp1000:flex hidden font-cormorant text-white'>
        <a
          onClick={() => { setActiveLink('home') }}
          href='#home' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
          <span>Home</span>
          <span className={`${activeLink == 'home' ? 'w-3/6' : 'w-0'} absolute -bottom-1  rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
          <span className={`${activeLink == 'home' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
        </a>
        <a
          onClick={() => { setActiveLink('about') }}
          href='#about' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
          <span>About</span>
          <span className={`${activeLink == 'about' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
          <span className={`${activeLink == 'about' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
        </a>
        <a
          onClick={() => { setActiveLink('education') }}
          href='#education' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
          <span>Education</span>
          <span className={`${activeLink == 'education' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
          <span className={`${activeLink == 'education' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
        </a>
        <a
          onClick={() => { setActiveLink('skills') }}
          href='#skills' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
          <span>Skills</span>
          <span className={`${activeLink == 'skills' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
          <span className={`${activeLink == 'skills' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
        </a>

        <a
          onClick={() => { setActiveLink('experience') }}
          href='#experience' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
          <span>Experience</span>
          <span className={`${activeLink == 'experience' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
          <span className={`${activeLink == 'experience' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
        </a>

        <a
          onClick={() => { setActiveLink('projects') }}
          href='#projects' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
          <span>Projects</span>
          <span className={`${activeLink == 'projects' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
          <span className={`${activeLink == 'projects' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
        </a>

        <a
          onClick={() => { setActiveLink('contact') }}
          href='#contact' className="group relative w-max   px-[6px] mx-[3px] cursor-pointer">
          <span>Contact</span>
          <span className={`${activeLink == 'contact' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-r-full left-1/2 w-0 transition-all h-[1px] bg-white  group-hover:w-3/6`}></span>
          <span className={`${activeLink == 'contact' ? 'w-3/6' : 'w-0'} absolute -bottom-1 rounded-l-full right-1/2 w-0 transition-all h-[1px] bg-white group-hover:w-3/6`}></span>
        </a>

      </ul>
    </>
  )
}

export default Offcanvas
