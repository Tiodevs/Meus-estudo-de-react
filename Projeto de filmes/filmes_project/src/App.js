import { useState } from "react";

function App() {

  const [input, setInput] = useState("")
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React'
  ])
  


  function handleRegister(e){
    e.preventDefault()
    setTarefas([...tarefas, input])
  }

  return (
    <div>
      <h1>Cadastrando user</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa:</label><br/>
        <input 
        placeholder="Digite a tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        /><br/>

        <button type="submit">Registrar</button>

      </form>

      <br/>
      <br/>

      <div>
    
      <ul>
        {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      </div>
    </div>
  );
}

export default App;
