import React from 'react'
import video  from '../../assets/videos/bikestore emote.mp4'

export const Easteregg = () => {
  return (
    <>  
    <main className='w-full h-screen flex flex-col justify-center gap-4 items-center transition duration-5000 bg-gradient-to-br from-red via-green to-yellow'>
        <p className='text-2xl text-red'>¡FELICIDADES! ENCONTRASTE EL SECRETO DE BIKESTORE</p>
        <video  width="640" height="360" autoPlay loop >
            <source src={video} type='video/mp4' ></source>
        </video>
    </main>
    </>
    
  )
}
