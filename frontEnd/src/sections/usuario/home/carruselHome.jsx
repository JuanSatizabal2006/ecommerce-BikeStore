import { Carousel } from '@material-tailwind/react'


const CarruselHome = () => {
  return (
    <Carousel >
        <div className='bg-red h-full w-full'></div>
        <div className='bg-green h-full w-full'></div>
        <div className='bg-yellow-900 h-full w-full'></div>
    </Carousel>
  )
}

export default CarruselHome