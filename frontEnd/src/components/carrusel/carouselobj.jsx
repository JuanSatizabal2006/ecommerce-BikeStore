import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export const Carouselobj = ({ images, texts }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevSlide = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const containerStyle = {
    width: '100%',
    height: `calc(100vh - 80px)`,
    overflow: 'hidden',
    position: 'relative',
  };

  const innerStyle = {
    width: `${images.length * 100}%`,
    height: '100%',
    display: 'flex',
    transition: 'transform 0.5s ease',
    transform: `translateX(-${currentImageIndex * (100 / images.length)}%)`,
  };

  const indicatorStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '100%',
    padding: '10px',
    cursor: 'pointer',
    transition: 'border-color 1s ease'
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    outline: 'none',
    transition: 'color 1s ease'
  };

  const handleHover = (e) => {
    e.target.style.border = 'solid';
    e.target.style.borderColor = '#A40505';

    e.target.style.borderWidth = '2px';
    e.target.querySelector('svg').style.color = '#A40505';
    e.target.style.scale = 1.1;
    e.target.style.transition = '1s'
  };

  const handleLeave = (e) => {
    e.target.style.borderColor = 'transparent';
    e.target.style.borderWidth = '1px';
    e.target.querySelector('svg').style.color = '#333';
    e.target.style.scale = 1;
  };

  return (
    <div className="carousel" style={containerStyle}>
      <div className="carousel-inner" style={innerStyle}>
        {images.map((image, index) => (
          <div key={index} className="slide-container" style={{ width: `${100 / images.length}%`, height: '100%', position: 'relative' }}>
            <img src={image} alt={`Slide ${index + 1}`} className="slide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {texts[index] && (
              <div className="slide-text flex flex-col  sm:block" style={{ position: 'absolute', ...texts[index].position, whiteSpace: 'pre-line' }}>
                {index === 0 && (
                  <div className='flex flex-col gap-6'>
                    <p className='font-semibold text-5xl'>{texts[index].tittle}</p>
                    <p className='text-xl font-normal'>{texts[index].parrafo}</p>
                    <Link to={'/catalogo'} className="text-xs text-center w-48 h-10 px-10 py-3 tracking-wide text-white font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
                      VER MÁS
                    </Link>
                  </div>
                )}
                {index === 1 && (
                  <div className='flex flex-col gap-6'>
                    <p className='font-semibold text-5xl'>{texts[index].tittle}</p>
                    <p className='text-xl font-normal'>{texts[index].parrafo}</p>
                    <Link to={'/catalogo?categoria=7'} className="text-xs text-center w-48 h-10 px-10 py-3 tracking-wide text-white font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
                      VER MÁS
                    </Link>
                  </div>
                )}
                {index === 2 && (
                  <div className='flex flex-col gap-6'>
                    <p className='font-semibold text-5xl'>{texts[index].tittle}</p>
                    <p className='text-xl font-normal'>{texts[index].parrafo}</p>
                    <Link to={'/catalogo?categoria=5'}  className="text-xs text-center w-48 h-10 px-10 py-3 tracking-wide text-white font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
                      VER MÁS
                    </Link>
                  </div>
                )}
                {index === 3 && (
                  <div className='flex flex-col gap-6'>
                    <p className='font-semibold text-5xl'>{texts[index].tittle}</p>
                    <p className='text-xl font-normal'>{texts[index].parrafo}</p>
                    <Link to={'/registro'} className="text-base text-center w-48 h-10 px-10 py-2 tracking-wide text-white font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
                      Registrarse
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="prev" style={{ ...indicatorStyle, left: '10px' }} onClick={prevSlide} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <FontAwesomeIcon icon={faChevronLeft} style={{ ...iconStyle, color: '#333' }} />
      </div>
      <div className="next" style={{ ...indicatorStyle, right: '10px' }} onClick={nextSlide} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <FontAwesomeIcon icon={faChevronRight} style={{ ...iconStyle, color: '#333' }} />
      </div>
    </div>
  );
};
