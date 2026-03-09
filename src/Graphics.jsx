import React from 'react'

function Graphics ({text1,text2}) {
  return (
    <div className=' pl-7.5 pt-12.5 bg-amber-800 h-67.5 w-67.5'>
        <div className=" mb-5 bg-red-50 h-15 w-17.5"></div>
        <p className=' text-[x-large] mb-5 '>{text1}</p>
        <div className=" font-semibold pb-2.5 underline">MORE</div>
    </div>
  )
}

export default Graphics 