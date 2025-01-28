import React, { useEffect } from 'react'
import Select from 'react-select'
import { optionsSelect } from '../../constants/optionsSelect'

export const Selector = ({text, enviarSelect, opciones, idValue}) => {
    
    useEffect(()=>{
        enviarSelect(idValue)
    },[enviarSelect, idValue])

    return (
        <>
            {
                !opciones ? 
                <div className='w-full justify-center'>
                    <p className='pl-1 text-2xl'>{text}</p>
                    <Select options={optionsSelect} className='border-2 border-red focus:ring-0 focus:ring-offset-0 outline-transparent rounded-lg text-xl' defaultValue={idValue} onChange={enviarSelect}  />
                </div> 
            : 
                <div className='w-full justify-center'>
                    <p className='pl-1 text-2xl'>{text}</p>
                    <Select options={opciones} className='border-2 border-red focus:border-red focus:ring-0 focus:ring-offset-0 outline-transparent rounded-lg text-xl' defaultValue={idValue} onChange={enviarSelect}  />
                </div>
            }
        </>
    )
}
