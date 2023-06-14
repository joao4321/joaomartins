import React, { useState } from 'react';

function ContadorDePessoas() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>Contador de Pessoas</h2>
      <p>Quantidade de Pessoas: {contador}</p>
      <button onClick={incrementarContador}>Adicionar Pessoa</button>
      <button onClick={decrementarContador}>Remover Pessoa</button>
    </div>
  );
}

export default ContadorDePessoas;
