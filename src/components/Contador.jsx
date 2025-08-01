import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
export default Contador;