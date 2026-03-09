import React from 'react'
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <div className=' bg-red-400 h-20 flex justify-between items-center'>
        <div className=" text-gray-300 text-[xx-large] ml-12.5 font-semibold">logo</div>
        <div className="text-[xx-large] mr-12.5"><IoMenu /></div>

    </div>
  )
}

export default Header