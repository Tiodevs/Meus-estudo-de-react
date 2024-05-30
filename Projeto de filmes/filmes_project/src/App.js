import { useState, useEffect } from "react";
import './style.css'
import trash from './assets/trash.svg';
import check from './assets/check.svg';

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
      <div className="header">
        <div className="header-topo">
          <div className="header-text">
            <h1>To do list</h1>
            <p>vamos deixar de procastinar?</p>
          </div>
          <h1>Felipe.</h1>
        </div>
        <div className="linha"></div>
      </div>

      <form onSubmit={handleRegister}>
        <input 
        placeholder="Nova tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        /><br/>

        <button type="submit">Registrar</button>

      </form>

      <div className="itens">
    
      
        {tarefas.map(tarefa => (
          <div className="item">
            <li key={tarefa}>{tarefa}</li>
            <button onClick={() => handleExluir(tarefa)}>
              <img src={trash}/>
            </button>
          </div>
        ))}
      

      </div>
    </div>
  );
}

export default App;
