import React from 'react'

export const TermDiv = ({icon, text, num}) => {
    console.log(num)
  return (
    <>
        {
            (num + 1) % 2 === 0 ? 
            <div className='bg-white flex flex-row-reverse justify-between items-center shadow-md gap-8 p-4 rounded-xl'>
                <img src={icon} alt="" className='w-11 h-12' />
                <p>{text}</p>
            </div> 
            : 
            <div className='bg-white flex flex-row justify-between items-center shadow-md gap-8 p-4 rounded-xl'>
                <img src={icon} alt="" className='w-11 h-12' />
                <p>{text}</p>
            </div> 
        }
    </>

  )
}
