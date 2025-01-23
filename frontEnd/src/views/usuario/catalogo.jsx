import React, {useEffect, useState} from "react";
import { NavBar } from "../../components/allNavBar/navBar";
import { Footer } from "../../components/footer/footer";
import { Producto } from "../../components/producto/producto";
import { Categorías } from "../../components/producto/filtrado/filtro";
import Paginador from "../../components/producto/paginador";


export const Catalogo = () => {

  const [productosPaginados ,setProductoPaginados] = useState([]);

  const enviarProducto = (dato)=>{
    console.log('datos en catalogo: ', dato);
    setProductoPaginados(dato);
    
  }
  const [categoriasVisibles, setCategoriasVisibles] = useState(true);

  return (
    <>
      <NavBar />
        <main className="flex flex-col items-center xl:items-start xl:flex-row justify-evenly mt-8 ">
          <div className="px-4 py-4 xl:px-10">
            <div className='flex flex-row items-center pl-1'>
              <button className='flex items-center'onClick={() => setCategoriasVisibles(!categoriasVisibles)}>
                <i className="fa-solid fa-filter pr-1 h-3"></i>
                <p className='text-2xl font-sans font-semibold'>Categorias</p>
              </button>
            </div>
            <div className="mb-2">
              {categoriasVisibles && (
                <div>
                  
                  <Categorías titulo={"Bicicletas"}/>
                  <Categorías titulo={"Ropa"}/>
                  <Categorías titulo={"Accesorios"}/>
                </div>
              )}
            </div>          
          </div>

          <div className="flex flex-col">
            <div className="flex justify-center xl:justify-end xl:mr-7 px-4 xl:px-0 flex-wrap gap-y-10 gap-x-10">
              {
                productosPaginados.map((producto) =>(
                  <Producto key={producto.id_articulo} descuento={producto.descuento} precio_anterior={producto.costo} nombreProducto={producto.nombre} precio={producto.precio_total} urlmg={producto.url_img.split(",").shift()} idProducto={producto.id_articulo} objetoProducto={producto} />
                ))
              }
              
            </div>
            <footer className="flex justify-center ml-1 xl:ml-0 shrink py-4"> 
              <Paginador cantPages={12} enviarProducto={enviarProducto} />
            </footer>
          </div>
          
        </main>
      
    </>
  )
};
