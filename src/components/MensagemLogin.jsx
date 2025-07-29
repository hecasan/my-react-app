function MensagemLogin({ logado }) {
   return (
      <div>
         {logado ? <p>Bem-vindo de volta!</p> : <p>Você precisa fazer login.</p>}
      </div>
   );
}
export default MensagemLogin;