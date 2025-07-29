import { useState } from 'react';
import CicloDeVida from './CicloDeVida';
function ToggleCiclo() {
  const [visivel, setVisivel] = useState(true);
  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        {visivel ? 'Ocultar' : 'Mostrar'} componente
      </button>
      {visivel && <CicloDeVida />}
    </div>
  );
}
export default ToggleCiclo;