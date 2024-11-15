import React from 'react'
import { FaCode } from 'react-icons/fa'
import { TiThMenu, TiThMenuOutline } from 'react-icons/ti'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    
      <header className=" w-full  text-white ">
       <div className='flex justify-between w-[95%] bg-[#161B33] m-[40px] p-[40px] rounded-3xl  h-[100px] items-center mx-[auto]'>
        <div>
          <Link to={'/'}>
            <FaCode className='text-[39px]'/>
          </Link>
        </div>
        <div>
          <ul className='text-[25px]  bp1000:flex hidden'>
            <NavLink to={'/'} className="group  relative w-max px-[20px] mx-[10px] cursor-pointer">
              <span>Home</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600  group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
            </NavLink>
            <NavLink to={'/about'} className="group relative w-max px-[20px] mx-[10px] cursor-pointer">
              <span>About me</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
            </NavLink>
            <NavLink to={'/works'} className="group relative w-max px-[20px] mx-[10px] cursor-pointer">
              <span>Works</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
            </NavLink>
            <NavLink to={'/contact'} className="group relative w-max px-[20px] mx-[10px] cursor-pointer">
              <span>Contact</span>
              <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-1 bg-indigo-600 group-hover:w-3/6"></span>
            </NavLink>
          </ul>
          <div>
          <TiThMenu className='text-[2em] bp1000:hidden' />
          </div>
        </div>
       </div>
      </header>
    </>
  )
}

export default Header
