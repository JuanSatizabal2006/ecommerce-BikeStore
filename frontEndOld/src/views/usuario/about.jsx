import React from 'react';
import { NavBar } from "../../components/allNavBar/navBar.jsx";
import { Footer } from "../../components/footer/footer.jsx";
import img1 from '../../img/img_about/imgn1.png'
import { AboutCard } from "../../components/about/about.jsx";
import { CartProvider } from '../../components/carrito/carritoContext.jsx';


export const About = () => {
    return (
        <>
        <CartProvider>
            <NavBar />
        </CartProvider>
            <div className="flex w-screen">
                <div className="container-img w-full py-12 pl-20 hidden 2xl:flex xl:flex lg:hidden md:hidden sm:hidden">
                    <img src={img1} alt="img" className='w-[80vh] h-auto' />
                </div>
                <div className="container-cards w-full p-12 flex flex-col gap-10">
                    <p className='text-red text-3xl font-bold text-center '>NOSOTROS SOMOS</p>
                    <div className="container-cards-cards grid 2xl:grid-cols-2 xl:grid-cols-2 gap-8 justify-items-center">
                        <AboutCard />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};




