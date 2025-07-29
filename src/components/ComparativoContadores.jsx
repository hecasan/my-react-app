import { useState } from 'react';

function ComparativoContadores() {
  const [valorInseguro, setValorInseguro] = useState(0);
  const [valorSeguro, setValorSeguro] = useState(0);
  const dispararAtualizacoesInseguras = () => {
    for (let i = 0; i < 5; i++) {
      setValorInseguro(valorInseguro + 1); // Pode sobrescrever o valor anterior
    }
  };
  const dispararAtualizacoesSeguras = () => {
    for (let i = 0; i < 5; i++) {
      setValorSeguro(prev => prev + 1); // Sempre pega o valor mais atualizado
    }
  };
  return (
    <div style={{ marginTop: '2rem' }}>
      <h3>Comparativo de Atualizações</h3>
      <div style={{ marginBottom: '1rem' }}>
        <p><strong>Inseguro:</strong> {valorInseguro}</p>
        <button onClick={dispararAtualizacoesInseguras}>
          Atualizar 5x (sem segurança)
        </button>
      </div>
      <div>
        <p><strong>Seguro:</strong> {valorSeguro}</p>
        <button onClick={dispararAtualizacoesSeguras}>
          Atualizar 5x (com segurança)
        </button>
      </div>
    </div>
  );
}
export default ComparativoContadores;