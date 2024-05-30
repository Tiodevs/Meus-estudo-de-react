import { useState } from "react";

function App() {

  const [nome, setNome]= useState("Felipe")

  function handleChangeName(){
    if (nome == "Felipe") {
      setNome('Matheus');
    } else {
      setNome('Felipe');
    }
    
  }

  return (
    <div>
      <h2>Olá {nome}</h2>

      <button onClick={handleChangeName}>
        Mudar nome
      </button>
      
    </div>
  );
}

export default App;
