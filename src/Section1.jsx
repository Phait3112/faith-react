import React from 'react'
import Achievement from './Achievement'

function Section1() {
  return (
    <div className=' bg-amber-200 h-187.5 flex '>
        <div className=" w-[60%] h-full ">
            <br /><br />
            <div className=" text-[50px] font-light ml-20">Hello, I'am</div>
            <div className='text-[80px] -mt-6.25 ml-20'>Kevin Smith</div>
            <p className=" ml-20 -mt-1.25">Image from <a href="https://www.freepik.com/" className=' underline'>Freepik</a></p>
                <br /><br />
            <div className=" bg-black w-42.5 h-13.75 text-white flex justify-center items-center ml-20">Get in Touch</div>
            <div className='  w-full  gap-2.5 mt-25 flex justify-evenly'>
            <Achievement text1="100"/>
            <Achievement text1="12"/>
            </div>
        </div>
        
        
        <div className=" w-[42%] bgred h-full bg-[url(man.png)] bg-center bg-cover"></div>

        
        
    </div>
  )
}

export default Section1