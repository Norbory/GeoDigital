import Carta from '../../components/carta'
import React, { useState } from 'react';

export default function Materiales(){
    const [stock,setStock] = useState(15);

    const handleRetirar = () => {
        setStock(stock-1);
      };
    
      const handleAumentar = () => {
        setStock(stock+1);
      };
    
      const handleSoporte = () => {
        // Lógica para llamar por soporte
      };
    return(
        <div>
            <h2>MATERIALES</h2>
            <Carta
                nombre="Tuberia de acero de 4 pulgadas"
                descripcion="Tuberia metalica de cuatro pulgadas utilizada para el recubrimiento de los sensores piezometricos durante el proceso de recrecimiento"
                ubicacion="Almacen de Construplan en la cumbre"
                stock={stock}
                onRetirar={handleRetirar}
                onAumentar={handleAumentar}
                onSoporte={handleSoporte}
            />
        </div>
    ); 
}