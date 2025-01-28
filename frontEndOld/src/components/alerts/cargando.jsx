import React from 'react'

export const Cargando = ({texto}) => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div style={{borderTopColor : "transparent"}} className="w-10 h-10 border-4 border-red rounded-full animate-spin"></div>
        <p className="ml-2 text-lg">{texto}...</p>
    </div>
  )
}