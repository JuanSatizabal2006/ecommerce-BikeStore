import React from "react"
import { Link } from "react-router-dom"

export const CheckboxInput = ({ text, enviarCheck }) => {
    return (

            <label className=" block min-h-[1.5rem] pl-4">
                Acepto <Link to={"/termCond"} className="hover:underline">{text}</Link>
                <input
                    type="checkbox"
                    className="relative right-[15.2rem]"
                    onChange={enviarCheck}
                />
            </label>

    )
}