import React, { useState } from 'react';

const ListaDeTarefas = () => {
  const [tarefa, setTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setTarefas([...tarefas, tarefa]);
      setTarefa('');
    }
  };

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        placeholder="Digite a sua tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeTarefas;
