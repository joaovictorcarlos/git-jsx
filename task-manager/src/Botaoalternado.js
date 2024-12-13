import React, { useState } from 'react';

const BotaoAlternador = () => {
  const [estado, setEstado] = useState('Desligado');

  const alternarEstado = () => {
    setEstado(estado === 'Desligado' ? 'Ligado' : 'Desligado');
  };

  return (
    <div>
      <button onClick={alternarEstado}>{estado}</button>
    </div>
  );
};

export default BotaoAlternador;
