// eslint-disable-next-line react/prop-types
import React from 'react';
import { Link } from "react-router-dom";
export const ItemNavBar = ({text, icon, url, booleanIcon})=>{ 
    return(
        <Link to={url} className=" h-10 flex text-red border-transparent hover:border-red duration-300 border-2 rounded-lg items-center text-xl px-2 py-1 gap-2 font-medium cursor-pointer">
            {
                booleanIcon ? <ion-icon name={icon} ></ion-icon> : <i className={icon} ></i>
            }
            
            <p to={url} className="text-base text-red">{text}</p>
        </Link>
    )
}