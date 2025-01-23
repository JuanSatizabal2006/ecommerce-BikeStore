import React, { useState } from 'react';

const QuantityButton = ({ valorInicial, maxCantidad, onChange }) => {

  const [cantidad, setCantidad] = useState(valorInicial);

  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
      onChange(cantidad - 1);
    }
  };

  const aumentarCantidad = () => {
    if (cantidad < maxCantidad) {
      setCantidad(cantidad + 1);
      onChange(cantidad + 1);
    }
  };

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1 && newQuantity <= maxCantidad) {
      setCantidad(newQuantity);
      onChange(newQuantity); // Llama a onChange aquí en lugar de enviarCantidad
    }
  };

  return (
    <div className="flex flex-row xl:w-auto xl:gap-0 xl:justify-normal justify-between w-auto border-red border-solid border-2 xl:px-0 px-2 rounded-md h-12 bg-white">
      <button className="xl:px-2 px-2 text-xl hover:scale-x-110" onClick={restarCantidad}>-</button>
        <input className="w-10 text-center" type="number" value={cantidad} onChange={handleChange} />
      <button className="xl:px-2 px-2 text-xl hover:scale-110" onClick={aumentarCantidad}>+</button>
    </div>
  );
}

export default QuantityButton