import React from 'react'
import People from './People'

function Section5() {
  return (
    <div className=' bg-amber-200 h-375 relative'>
        <div className="  h-137.5 w-250 ml-50 absolute -top-67.5">
            <p className=" text-[xxx-large] text-white mb-5">What clients say</p>
            <div className=" mb-7.5 h-107.5 flex justify-around gap-5">
                <People text1="Sasha Grey" text2="Business Owner"/>
                <People text1="Nat Reynolds" text2="Chief Accountant"/>
                <People text1="Bob Roberts" text2="Sales Manager"/>
            </div>
            <p className=" ml-2.5">Images from <a href="https://www.freepik.com/" className=' underline'>Freepik</a></p>
        </div>
    </div>
  )
}

export default Section5