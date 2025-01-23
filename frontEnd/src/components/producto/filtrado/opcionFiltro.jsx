import React, { useState } from "react";

export const OpcionFiltro = ({ label,accionInput,valor }) => {
  
    return (
      <div className="flex items-center">
          <input type="checkbox" onChange={accionInput} checked={valor} />
          <p className="px-2">{label}</p>
      </div>
    );
  };