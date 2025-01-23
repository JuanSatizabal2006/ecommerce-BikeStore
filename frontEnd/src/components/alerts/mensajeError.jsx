import React from 'react'

export const MensajeError = ({ error }) => {

  return (
    <div className="flex flex-row gap-5 bg-red2 border-2 border-red items-center justify-center px-6 py-2">
      <i className="fa-solid fa-circle-xmark fa-xl text-red"></i>
      <p className="text-lg text-center font-bold text-red">{error}</p>
    </div>
  )
}
