import { useState } from 'react';
function LoginToggle() {
  const [logado, setLogado] = useState(false);
  const alternarLogin = () => {
    setLogado(prev => !prev);
  };
  return (
    <div>
      {logado ? (
        <p>Bem-vindo de volta!</p>
      ) : (
        <p>Você precisa fazer login.</p>
      )}
      <button onClick={alternarLogin}>
        {logado ? 'Sair' : 'Entrar'}
      </button>
    </div>
  );
}
export default LoginToggle;