import { useState } from 'react';

function UsuarioInfo() {
  const [usuario, setUsuario] = useState({ nome: 'João', idade: 25 });
  const incrementarIdade = () => {
    setUsuario({ ...usuario, idade: usuario.idade + 1 });
  };
  return (
    <div>
      <p>{usuario.nome} tem {usuario.idade} anos.</p>
      <button onClick={incrementarIdade}>Aumentar idade</button>
    </div>
  );
}
export default UsuarioInfo;