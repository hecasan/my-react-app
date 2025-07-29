import { useState } from 'react';
function TextoDinamico() {
   const [texto, setTexto] = useState('Texto inicial');
   return (
      <div>
         <p>{texto}</p>
         <input
            type="text"
            value={texto}
            onChange={e => setTexto(e.target.value)}
         />
      </div>
   );
}
export default TextoDinamico;