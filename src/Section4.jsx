import React from 'react'
import Education from './Education'

function Section4() {
  return (
    <div className=' pl-25 pt-25 h-250 bg-black'>
        <div className=" mb-5 flex items-center justify-between w-175 h-10 ">
            <div className=" text-[larger] text-amber-200">EDUCATION</div>
            <div className=" text-[larger] text-amber-200">AWARDS</div>
        </div>
        <div className=" h-112.5  w-310 grid grid-cols-2 grid-rows-2 gap-y-20">
            <Education text1='Oxford University'/>
            <Education text1='ED-Awards'/>
            <Education text1='Bath University'/>
            <Education text1='The Good Design'/>

        </div>
    </div>
  )
}

export default Section4