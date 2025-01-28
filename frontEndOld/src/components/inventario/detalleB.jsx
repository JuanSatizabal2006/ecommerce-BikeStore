import React from "react";

export const detalle = ({ text }) => {
    return (
        <button className="px-10 py-2 tracking-wide text-white text-xl font-bold transition-colors duration-200 transform border-solid bg-red rounded-md hover:bg-white hover:text-red hover:border-solid border-2 hover:border-red">
            {text}
        </button>
    )
}