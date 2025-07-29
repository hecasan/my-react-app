import { useState } from 'react';

function ContadorSeguro() {
  const [contador, setContador] = useState(0);
  const incrementarSeguro = () => {
    setContador(prev => prev + 1);
  };
  return (
    <div>
      <p>Valor atual: {contador}</p>
      <button onClick={incrementarSeguro}>Incrementar com segurança</button>
    </div>
  );
}
export default ContadorSeguro;