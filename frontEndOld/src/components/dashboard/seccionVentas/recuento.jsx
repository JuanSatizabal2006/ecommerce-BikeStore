import React from "react";

export const Recuento = ({icon, numero, objeto, estado}) => {
    return(
        <div className="min-w-[12.75rem]  w-full sm:w-auto 2xl:w-[26rem] bg-white  h-[12.563rem] border-solid shadow-lg rounded-2xl mb-2 flex-wrap">
            <div className="h-[4rem] sm:h-16 bg-red rounded-t-2xl flex items-end ">
                {icon && <i className={`fa-solid ${icon} p-2 text-3xl sm:text-4xl font-semibold text-white`}></i>}
            </div>
            <div className="px-3 h-[7rem] flex flex-col justify-end">
                <p className="text-4xl font-semibold text-red">{numero}</p>
                <p>{objeto}</p>
                <p className="text-grey_2 font-semibold">{estado}</p>
            </div>  
        </div>
    )
}