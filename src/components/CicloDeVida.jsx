import { useEffect } from 'react';
function CicloDeVida() {
  useEffect(() => {
    console.log('🟢 Componente montado');
    return () => {
      console.log('🔴 Componente será desmontado');
    };
  }, []);
  return <div>Componente com ciclo de vida</div>;
}
export default CicloDeVida;