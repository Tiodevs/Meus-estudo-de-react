import { useState, useEffect } from "react";
import './style.css'

function App() {

  const [input, setInput] = useState("")
  const [tarefas, setTarefas] = useState([])

  useEffect(() =>{
    const tarefasStorage = localStorage.getItem('@tarefa')
    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('@tarefa',JSON.stringify(tarefas))
  }, [tarefas]);

  function handleExluir(key){
    console.log(key)
    let index = tarefas.indexOf(key);
    if (index !== -1) {
      let newArray = tarefas.slice(0, index).concat(tarefas.slice(index + 1));
      setTarefas(newArray)
    }
  }

  function handleRegister(e){
    e.preventDefault()
    console.log("fomulario enviado")
    setTarefas([...tarefas, input])
    setInput('')
  }

  return (
    <div className="Container">
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
    
      
        {tarefas.map(tarefa => (
          <div className="Item">
            <p key={tarefa}>{tarefa}</p>
            <button onClick={() => handleExluir(tarefa)}>
              Exluir
            </button>
          </div>
        ))}
      

      </div>
    </div>
  );
}

export default App;
