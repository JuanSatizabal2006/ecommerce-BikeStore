import React from "react";
import { SideBar } from "./sideBar";
import { SideBarUser } from "./sideBarUser";
import { Link } from "react-router-dom";
import img1 from "../../img/img_sideBarUser/img1.png";
import { usarCarrito } from "../../helper/usarCarrito";
import { useAuth } from "../../auth/authProvider";
import { CartProvider } from "../carrito/carritoContext";

export const NavBar = () => {
  //const { carrito } = usarCarrito();

  const { rol } = useAuth();

  return (
    <CartProvider>
      <header className="sticky top-0 bg-black flex xl:flex-row flex-col items-center xl:gap-0 gap-2 py-2.5 px-5 xl:h-20 h-auto xl:w-auto w-auto justify-between z-[100]">
        <div className="flex xl:gap-5 gap-12  xl:border-b-0 border-b-white border-b-2 ">
          <Link to={"/home"}>
            <picture className="xl:border-r-2 border-white flex align-center w-52 h-14">
              <img
                src="/public/img/logos/logo.png"
                alt="Logo Bike Store"
                className="w-44 m-auto"
              />
            </picture>
          </Link>

          <SideBar rol={rol} />
          {/*<div className=" items-center xl:block hidden py-3" >
          <input type="text" placeholder="Buscar" className='border-2 rounded-l-lg border-white bg-transparent text-white text-right pr-2' />
          <i className="fa-solid fa-magnifying-glass text-white h-7 w-8 border-2 border-l-0 rounded-r-lg border-white bg-red py-1 px-2"></i>
        </div>*/}
        </div>
        <div className="flex xl:flex-row flex-row-reverse gap-5">
          <div className="flex items-center gap-5">
            {/*
            rol == "loginAdmin" ? (
              ""
            ) : (
              <Link to={"/carrito"} className="relative flex mt-2">
                <i className="fa-solid fa-cart-shopping text-white text-2xl"></i>
                <p
                  className="text-xs text-white bg-red rounded-full w-5 h-5 text-center absolute -top-2 -right-2 flex items-center justify-center"
                  id="cantCart"
                >
                  {carrito.length}
                  0
                </p>
              </Link>
            )*/}
            <Link to={"/carrito"} className="relative flex mt-2">
              <i className="fa-solid fa-cart-shopping text-white text-2xl"></i>
              <p
                className="text-xs text-white bg-red rounded-full w-5 h-5 text-center absolute -top-2 -right-2 flex items-center justify-center"
                id="cantCart"
              >
                0
              </p>
            </Link>
            <SideBarUser
              nombre={"Juan Steban"}
              apellido={"Moreno Lopez"}
              url={img1}
              rol={rol}
            />
          </div>
          {/*
          <div className="flex items-center xl:hidden pt-2">
            <input type="text" placeholder="Buscar" className='border-2 rounded-l-lg border-white bg-transparent text-white text-right pr-2' />
            <i className="fa-solid fa-magnifying-glass text-white h-7 w-8 border-2 border-l-0 rounded-r-lg border-white bg-red py-1 px-2"></i>
          </div>  
        */}
        </div>
      </header>
    </CartProvider>
  );
};
