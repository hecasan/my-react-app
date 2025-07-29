function ListaUsuarios() {
   const usuarios = [
      { id: 2, nome: 'Bruno' },
      { id: 1, nome: 'Ana' },
      { id: 3, nome: 'Carlos' }
   ];
   return (
      <ul>
         {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.nome}</li>
         ))}
      </ul>
   );
}
export default ListaUsuarios;