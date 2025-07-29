import { useState } from 'react';

function ListaNumeros() {
  const [lista, setLista] = useState([1, 2, 3]);
  const adicionarNumero = () => {
    const proximo = lista.length + 1;
    setLista([...lista, proximo]);
  };
  return (
    <div>
      <p>Lista: {lista.join(', ')}</p>
      <button onClick={adicionarNumero}>Adicionar número</button>
    </div>
  );
}
export default ListaNumeros;