import styled from 'styled-components';
const Botao = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
function BotaoEstilizado() {
  return <Botao>Clique aqui</Botao>;
}
export default BotaoEstilizado;