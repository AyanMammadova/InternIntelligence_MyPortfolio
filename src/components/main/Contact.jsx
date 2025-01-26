import React, { useState } from 'react'
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'
import { MdLocationOn, MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Contact() {
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    message: false
  })
  function checkValidation(input, type) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const fullNameRegex = /^\s*[a-zA-Z]+(?:[ ',-][a-zA-Z]+)*\s*$/;
  
    const newErrors = { ...errors };
  
    if (type === 'name') {
      newErrors.fullname = !fullNameRegex.test(input)
    } else if (type === 'email') {
      newErrors.email = !emailRegex.test(input)
    } else if (type === 'message') {
      newErrors.message = input.trim().length <= 5
    }
  
    setErrors(newErrors);}
  return (
    <>
      <div className='relative '>
        <img className='absolute top-[-70px] h-[45px] right-[40px]' src="/falling-star.png" alt="" />
        <p className='text-center text-[2.5em] text-white'>Contact me</p>
      </div>
      <div className='font-josefin    text-white w-[95%] bg-black border-[3px] border-white m-[40px] md:p-[40px] rounded-3xl   items-center mx-[auto]'>
        <p className='text-[1.4em] text-center p-[15px]'>Feel Free to Say Hello – Let’s Connect and Collaborate! <div className='absolute h-[1px] bg-white w-[90%] mx-auto'></div></p>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <div className="space-y-4 pt-[20px]">

                <Link
                  to={'https://www.linkedin.com/in/ayan-m%C9%99mm%C9%99dova-90193527b/'}
                  target='blank'
                  className="flex  gap-[10px] items-center">
                  <div className='border-[1px] cursor-pointer border-white  rounded-full p-[5px]'>
                    <FaLinkedin />
                  </div>
                  <span className='cursor-pointer'>Ayan Məmmədova</span>
                </Link>
                <Link
                  to={'https://github.com/AyanMammadova'}
                  target='blank'
                  className="flex  gap-[10px] items-center">
                  <div className='border-[1px] cursor-pointer border-white  rounded-full p-[5px]'>
                    <FaGithub />
                  </div>
                  <span className='cursor-pointer'>Ayan Mammadova</span>
                </Link>

                <Link
                  to={'tel:+994702561065'}
                  target='blank'
                  title='Click to Call' className="flex  gap-[10px] items-center">
                  <div className='border-[1px] cursor-pointer border-white  rounded-full p-[5px]'>
                    <FaPhoneAlt />
                  </div>
                  <span className='cursor-pointer'>+994 70 257 10 65</span>
                </Link>

                <Link to={'mailto:ayan.md@div.edu.az'}
                  target='blank'
                  title='Click to Send me message' className="flex  gap-[10px] items-center">
                  <div className='border-[1px] border-white  rounded-full p-[5px]'>
                    <MdOutlineEmail />
                  </div>
                  <span>ayan.md@div.edu.az</span>
                </Link>
                <p className="flex gap-[10px] items-center ">
                  <div className='border-[1px] border-white  rounded-full p-[5px]'>
                    <MdLocationOn />
                  </div>
                  <span>Baku,Azerbaijan</span>
                </p>

              </div>
            </div>
            <form noValidate="" className="flex  flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block relative">
              <p className={`${errors.fullname ? 'absolute' : 'hidden'}  text-red-600 top-[60px] text-[.7em]`}>Enter your full name please</p>
                <span className="mb-1">Full name</span>
                <input
                  onChange={(e) => {
                    checkValidation(e.target.value, 'fullname')
                  }}
                  type="text"
                  placeholder="Leroy Jenkins"
                  className="block text-black p-[5px] w-full rounded-md  " />
              </label>
              
              <label className="block relative">
              <p className={`${errors.email ? 'absolute' : 'hidden'}  text-red-600 top-[60px] text-[.7em]`}>Enter a valid email please</p>

                <span className="mb-1">Email address</span>
                <input
                  onChange={(e) => {
                    checkValidation(e.target.value, 'email')
                  }}
                  type="email"
                  placeholder="leroy@jenkins.com"
                  className="block text-black p-[5px] w-full rounded-md  " />
              </label>
              <label className="block relative">
              <p className={`${errors.message ? 'absolute' : 'hidden'}  text-red-600 top-[110px] text-[.7em]`}>Enter longer message please</p>

                <span className="mb-1">Message</span>
                <textarea
                  onChange={(e) => {
                    checkValidation(e.target.value, 'message')
                  }}
                  rows="3"
                  className="block w-full rounded-md  text-black p-[5px] ">

                </textarea>
              </label>
              <button className='border-2  rounded-lg'>Submit!</button>
            </form>
          </div>
        </section>

      </div>
    </>
  )
}

export default Contact
