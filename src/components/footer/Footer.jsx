import React from 'react'

function Footer() {
  const year=new Date
  // console.log(year.getFullYear())
  return (
    <>
    <div>

      <p className='text-white font-[600] text-center'>© {year.getFullYear()} All rights reserved by <span className='text-[#A37EBD]'>Ayan Mammadova</span></p>
    </div>
     
    </>
  )
}

export default Footer
