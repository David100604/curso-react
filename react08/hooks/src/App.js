import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  // Substitui o componentDidMount, ou seja, quando o component é montado na tela, ele executa a função
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    console.log('Recuperando tarefas do localStorage', tarefasStorage);

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }
  }, [])

  // Armazena a state tarefas ao localStorage como uma string no formato json toda vez que a state for atualizada
  // Substitui o comoponentDidUpdate
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas])

  // Função transformada em useCallback para evitar gasto de processamento desnecessário pois dessa forma a função é
  // recriada toda vez, ao digitar
  // function handleAdd(){
  //   setTarefas([...tarefas, input]);
  //   setInput('');
  // }

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas])

  // Evita execuções desnecessárias ao chamar a função somente quando alterar um state específico
  // Retorna um valor único
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
