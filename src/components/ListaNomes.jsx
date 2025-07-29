function ListaNomes() {
   const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'];
   return (
      <ul>
         {nomes.map((nome, index) => (
            <li key={index}>{nome}</li>
         ))}
      </ul>
   );
}
export default ListaNomes;