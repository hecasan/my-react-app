function MensagemUsuario({ usuario }) {
   let conteudo;
   if (usuario) {
      conteudo = <p>Olá, {usuario}!</p>;
   } else {
      conteudo = <p>Nenhum usuário logado.</p>;
   }
   return <div>{conteudo}</div>;
}
export default MensagemUsuario;