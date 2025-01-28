import React from 'react';
import { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";


export const Dropdown = ({title, icon, url, booleanIcon, lista}) => {
  
  /* ESTADO PARA ABRIR Y CERRAR EL DROPDOWN */
  const [drop, setDrop] = useState(true);
  const cambiarEstado = () => {
    setDrop(!drop);
  };

  return (
    <div
      className={`${
        drop ? "h-10" : (lista.length == 3) ? 'h-36' : 'h-auto'
      } text-xl overflow-hidden transition-all `}
    >
      <div className="flex justify-between text-red border-2 rounded-lg items-center text-xl px-2 py-1 gap-2 font-medium border-transparent hover:border-red duration-300">
        <div className="flex gap-2 items-center">
          
          {booleanIcon 
            ? 
            <ion-icon ion-icon name={icon} ></ion-icon> 
            : 
            <i className={icon} ></i>
          }
      
          <p className="text-base">{title}</p>
        </div>
        <i
          className={`${
            drop ? "" : ""
          } fa-solid fa-chevron-down text-sm cursor-pointer`}
          onClick={() => setDrop(cambiarEstado)}
        ></i>
      </div>

      
        <div className="ml-6 mt-2 flex flex-col gap-1">
          
            {lista.map((itemLista) => (
              <Link key={itemLista.id} className="text-red text-base flex gap-2 items-center px-2 py-1 rounded-lg cursor-pointer duration-300" to={`/catalogo?categoria=${itemLista.id}`}>
                <ion-icon name={itemLista.icon} ></ion-icon>
                {itemLista.text}  
              </Link>
            )
            )}

        </div>
    
    </div>
  );
};
