import Aos from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'; 

function Main() {
  useEffect(() => {
    Aos.init(); 
  }, []);
  return (
    <>
       <div className='flex justify-between text-white w-[95%] bg-[#161B33] m-[40px] p-[40px] rounded-3xl  h-[100px] items-center mx-[auto]'>
        
        <a href="/MammadovaAyanCV.pdf" download="MammadovaAyanCV.pdf">
        <button className="download-button bg-slate-400 rounded p-[10px]">Download My CV</button>
        </a>
       
       </div>

    </>
  )
}

export default Main
