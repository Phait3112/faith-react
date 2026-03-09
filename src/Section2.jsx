import React from 'react'
import Strenghts from './Strenghts'

function Section2() {
  return (
    <div className=' bg-black h-87.5 pt-12.5 '>
        <p className=' text-amber-200 text-[larger] ml-25'> MY STRENGHTS</p>
        <div className=" flex justify-center gap-10 w-full h-55 ">
            <Strenghts text1='Ambition'/>hello there
            <Strenghts text1='Precision'/>
            <Strenghts text1='Assertive'/>

        </div>
    </div>
  )
}

export default Section2