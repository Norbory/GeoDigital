import React, { useState } from 'react';
import Carta from '../../components/carta';
import { type Images } from '../../types/apiImages';

export default function Materiales(){
  const [images, setImages] = useState([]);	
  const [stock,setStock] = useState(15);

  const hiper = 'https://real-time-image-search.p.rapidapi.com/search?query=jimmy&region=us';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3255a56dc0mshe9c14eb7fb29838p1fe828jsn894da3e3435d',
      'X-RapidAPI-Host': 'real-time-image-search.p.rapidapi.com'
    },
  };

  const handleRetirar = () => {
      setStock(stock-1);
    };
  
    const handleAumentar = () => {
      setStock(stock+1);
    };
  
    const handleSoporte = async () => {
      try {
        const response = await fetch(hiper, options);
        const result = await response.json() as Images;
        const imagenes = result.data.map((image) => ({
          id: image.url,
        })); 
        setImages(imagenes);
      } catch (error) {
        console.error(error);
      }
    };

  return(
      <div>
          <h2>MATERIALES</h2>
          <Carta
              nombre="Tuberia de acero de 4 pulgadas"
              url={images[0] ? images[0].id : "https://www.turflexperu.com/wp-content/uploads/2018/12/Tubo-PVC-Agua-1.jpg"}
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