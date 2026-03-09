import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";

function People({text1,text2}) {
  return (
    <div className=' h-full pt-7.5 w-75 rounded-[20px] bg-white pr-5 pl-5'>
        <p className=" text-[60px] mb-5"><FaQuoteLeft /></p>
        <p className=" mb-7.5">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <div className=" h-25 w-25 mb-5 bg-amber-300 rounded-full"></div>
        <p className=" text-[x-large] font-bold mb-2.5">{text1}</p>
        <p className="">{text2}</p>
    </div>
  )
}

export default People