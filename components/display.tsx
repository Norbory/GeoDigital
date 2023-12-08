import React from 'react';
import Page404 from '../pages/routes/page404.routes';
import Materiales from '../pages/routes/materiales.routes';
import Alcances from '../pages/routes/alcances.routes';
import Equipo from '../pages/routes/equipo.routes';

const Display = ({ page }) => {
  let ComponentToDisplay = null;

  // Definir los componentes correspondientes para cada ruta
  switch (page) {
    case '/routes/materiales':
      ComponentToDisplay = Materiales;
      break;
    case '/routes/alcances':
      ComponentToDisplay = Alcances;
      break;
    case '/routes/equipo':
      ComponentToDisplay = Equipo;
      break;
    default:
      // En caso de no coincidir con ninguna ruta, muestra la página 404
      ComponentToDisplay = Page404;
      break;
  }

  return (
    <section>
      {ComponentToDisplay ? <ComponentToDisplay /> : <Page404 />}
    </section>
  );
};

export default Display;