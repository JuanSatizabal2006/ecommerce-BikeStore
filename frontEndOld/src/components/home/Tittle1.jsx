import React from 'react'

export const Tittle = ({ Tittle, Tittle2, Text, Text2, Text3, Text4}) => {
  return (
    <div className="pt-16">
      <p className='text-6xl text-center font-semibold '>
        {Tittle}
        <br></br>
        {Tittle2}
      </p>
      <p className='ct-p text-xl text-center pt-10 font-normal text-grey_2'>
        {Text}
        <br></br>
        {Text2}
        <br></br>
        {Text3}
        <br></br>
        {Text4}
      </p>
    </div>
  )
}
