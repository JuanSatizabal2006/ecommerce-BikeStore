import React from 'react'

export const InputForm = ({showPassword, title,name, typeInput, stepInput, enviarTipeo, anotherClassInput, anotherClassLabel, placeHolder, max}) => {

    const funcionChange = (input)=>{
        //Valores del name y el value que contiene el input y se enviarán como array al componente padre
        typeInput != "number" ? enviarTipeo([input.target.name, input.target.value, false]) 
        : enviarTipeo([input.target.name, input.target.value, true]);
        //esta condicional nos sirve para que a la hora de enviar el dato al componente padre, podamos verificar el tipo de dato
        //si es true (number), si es false (text), para asi poder definir el tipo de conversion(string o float) 
    }
    
    let maximo = null

    if (!max) {
        maximo = 100      
    }else{
      maximo = max
    }

  return (
    <>
        <label className={`flex flex-col text-2xl ${anotherClassLabel}`}>
          {title}
          <input 
          name={name.toLowerCase()} 
          type={showPassword ? 'text' : typeInput} 
          className= {`border-2 border-red rounded-md h-[2.4rem] px-2 text-base ${anotherClassInput}`}
          step={stepInput} 
          placeholder={placeHolder}
          maxLength={maximo}
          onChange={funcionChange}/>
        </label>
        
    </>
  )
}