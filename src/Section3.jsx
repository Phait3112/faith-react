import React from 'react'
import Graphics from './Graphics'

function Section3() {
  return (
    <div className=' bg-amber-200 flex flex-col items-center h-250 pt-20'>
        <p className=' text-[larger] text-amber-950 ml-25 mb-5'>A BIT ABOUT ME</p>
        <p className=' text-[xxx-large] ml-25 mb-5'>Who Am I?</p>
        <p className='  ml-25 w-200 mb-12.5'>Hi, I'm Kevin Smith. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae aut porro odit numquam fuga hic ipsum repellat assumenda quos, earum quidem ipsa laudantium est. Dolorem aspernatur facilis vitae vero velit sit quod reprehenderit corrupti.</p>

        <div className=" flex gap-7.5 justify-center bg-red-200 h-75">
            <Graphics text1='GRAPHIC DESIGN '/>
            <Graphics text1='WEB DESIGN'/>
            <Graphics text1='SOFTWARE'/>
            <Graphics text1='APPLICATION'/>

        </div>
        <div className=" bg-black h-72.5 w-[87%] pl-5 pt-7.5">
            <p className=' text-white text-[xxx-large] mb-3.75'>I am happy to let you know that 300+ projects have been done successfully!</p>
            <div className=" h-15 w-45 border-white border-2 bg-black text-white flex justify-center items-center">Learn More</div>
        </div>

    </div>
  )
}

export default Section3