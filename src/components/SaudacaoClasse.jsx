import React, { Component } from 'react';

class SaudacaoClasse extends Component {
  render() {
    return <h2>Olá, {this.props.nome} (Classe)!</h2>;
  }
}
export default SaudacaoClasse;