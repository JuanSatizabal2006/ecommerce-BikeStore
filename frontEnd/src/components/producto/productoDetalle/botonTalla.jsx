import React from 'react'
export const Talla = ({ text }) => {

    return (
        <>  <div className='pr-3'>
               <button className="px-5 py-3 w-auto tracking-wide text-red text-base font-bold transition-colors duration-200 transform border-solid bg-white rounded-xl focus:bg-red focus:text-white focus:border-solid border-2 focus:border-red">
                   {text}
               </button>
            </div>
        </>
    )
}
