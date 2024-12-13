// src/App.js
import React from 'react';
import Contador from './Contador'; // Importando o componente Contador
import Botaoalternado from './Botaoalternado'; // Importando o componente Botaoalternado
import Listatarefas from './Listatarefas'; // Importando o componente ListaDeTarefas

function App() {
  return (
    <div className="App">
      <h1>botão para contar</h1>

      {}
      <Contador />

      {}
      <Botaoalternado />

      {}
      <Listatarefas />
    </div>
  );
}

export default App;
