# Meus estudos de REACT

A alguns anos atraz eu desenvolvia sites com react, eu parei de usa-lo e migrei para outras ferramentas. Agora quero voltar a desenvolver em React e resolvi estudar como se estivesse começando do zero e documentar os meus primeiros projetos e topicos de estudo.

Eu gosto sempre de anotar o que estou aprendendo para poder no futuro usar isso para resolver problemas ou ajudar outras pessoas que estão começando.

Para eatudar estou usando a  documentação oficial do React: https://react.dev/learn

E uma parte do curso da udemy do Matheus Fraga:
https://www.udemy.com/course/dev-fullstack/?couponCode=24T3MT53024

## Iniciar o projeto

1- Intalar o node versão (LTS), para ter acesso ao npm

2- verificar se ja tem node pelo cmd
    escrever: node -v

3- Baixar o yarn que é uma versão alternativa do npm (gerenciador de pacotes)
    escrever no cmd: npm install -g yarn

4- Iniciar um projeto react sem framework (o que o react não recomenda mais que seja feito)
    1- Criar uma pasta e abrir CMD dentro da pasta do projeto
    2- Escreva no cmd: npx create-react-app [nome do projeto]
    3- Escreva no cmd: npm start

5- Limpar os arquivos padrão do React
    1- no public deixar apenas o index.html (e deixar so a div app), manifest.json e robots.txt
    2- no srx deixar apenas APP.js, index.js e tirar a inportação que ficou nos dois arquivos


## O que são componentes

### Resumo:
Componentes são partes de codigos que podem ser usadas uma ou mais vezes no projeto, por exemplo. Podemos criar um componente so para o menu do site, e assim em todas as paginas do nosso projeto podem usar o mesmo codigo sem precisar repetir ele varias vezes. Oura vantagem de usar componente e de que fica mais facil e rapido de fazer manutenção e manter um padrão nas paginas o que a longo prazo evita problemas e economiza tempo

### Como criar um componte:
Todo componente é uma função e ela precisa ser exportada para que outros arquivos poçam usar-las, exemplo de função:

    function Mensagem(){
        return(
            <h1>Meu nome é: Felipe</h1>
        )
    }

    export default Mensagem;

### Observações:
Todo componente precisa começar com a letra maiuscula, para inportar o componente em outro arquivo basta fazer o seguinte:

    import Mensagem from './Mensagem';

e escrever aonde quiser colocar o componente: 

    <Mensagem/>

## Proriedades

### Resumo:
As proriedades tornam possiveis deixar os componentes mais personalizaveis(dinamicos), podendo passar proriedades ao chamar o componente e o componente pode receber essas propriedades como parametro dentro da função do elemento, 
    
### Como usar:
    
Quando eu for chamar o componente eu passo o parametro nome:

    <Mensagem nome="Felipe"/>

E para receber essa proriedade no componnete eu recebo como um parametro chamado "props" e quando eu for usar o parametro coloco entre chaves e escrevo props.nome da proriedade, veja o exemplo:

    function Mensagem(props){
        return(
            <h1>Meu nome é: {props.nome}</h1>
        )
    }

    export default Mensagem;

Você pode desestruturar os parametros assim:

    function Mensagem({nome}){
        return(
            <h1>Meu nome é: {nome}</h1>
        )
    }

    export default Mensagem;

## Como usar Hooks/ UseState:

### Resumo:

As proriedade e variaveis elas tem um valor que não pode ser alterado durante a execução do site, atravez dos hooks nos podemos tornar isso dinamico.

### Importar os Hooks:

No começo do codigo escrever:

    import { useState } from "react";

Criar a constante em que o use state vai armazenar o valor:

    const [nome, setNome]= useState("Felipe")

Observação: Toda vez que usarmos hooks vamos ter que criar 2 variaveis, uma para gardar o valor atual e outra para alterar o valor atual. A qua altera o valor tem por padrão o começo com "set" e sepois o nome da primeira variavel. Tudo que colocarmos dentro do useState("Felipe") vai ser considerado um valor padrão, nesse caso foi uma string mas no futuro isso pode ser um objeto, array e etc.

Agora eu posso criar um h1 para exibir o valor da variavel nome

    <h2>Olá {nome}</h2>

Com isso podemos tambem criar um botão que chama uma função para editar o nome da variavel:

    <div>
      <h2>Olá {nome}</h2>

      <button onClick={handleChangeName}>
        Mudar nome
      </button>
      
    </div>

Depois precisamos criar a função para o codigo:

    function handleChangeName(){
        setNome('Matheus')
    }

Agora podemos mandar como parametro o nome que queremos colocar ataravez da função que é chamada no botão, para ficar ainda mais dinamico o codigo:

    function handleChangeName(nome){
        setNome(nome);
    }

    return (
        <div>
        <h2>Olá {nome}</h2>

        <button onClick={() => handleChangeName("Matheus")}>
            Mudar nome
        </button>
        
        </div>
    );

Observação: Quando formos passar o parametro na função dentro do botão precisamos tranformala em uma array function () => handleChangeName("Matheus"). Se usarmos apenas o handleChangeName("Matheus") o react vai ficar executando essa função infinitamente.

Resultado final: 
    import { useState } from "react";

    function App() {

    const [nome, setNome]= useState("Felipe")

    function handleChangeName(nome){
        setNome(nome);
    }

    return (
        <div>
        <h2>Olá {nome}</h2>

        <button onClick={() => handleChangeName("Matheus")}>
            Mudar nome
        </button>
        
        </div>
    );
    }

    export default App;

## Manipulando Formularios

### Resumo

É muito inportante um programador saber manipular corretamente um formulario pois em quase toda aplicação é necessario varios formulario diferentes.

### Criação da base do fomulario

    <h1>Cadastrando</h1>
    <form>
        <label>Nome:</label><br/>
        <input placeholder="Digite o seu nome"/><br/>
        
        <label>Email:</label><br/>
        <input placeholder="Digite o seu email"/><br/>
        
        <label>Idade:</label><br/>
        <input placeholder="Digite o seu idade"/><br/>

        <button type="submit">Registrar</button>
    </form>

    <br/><br/>

    <div>
        <span>Bem vindo: Felipe</span><br/>
        <span>Email: fkdshf@gmail.com</span><br/>
        <span>Idade: 22</span><br/>
    </div>

### Como usar useState no formulario

1- importar o useState

    import { useState } from "react";

2- Criar as variaveis

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [idade, setIdade] = useState("")

3- Existem 2 proriedades muito impotantes nos inputs do fomulario que são:

- *value*, essa proriedade recebe o valor que esta dentro do input, podemos definir ele como variavel nome que criamos com useState:
        
        <input 
        placeholder="Digite o seu nome"
        value={nome}
        />

- *onChange*, como o nome diz quando algo mudar no valor do input ele executa, podemos atravez disso char o setName para alterar o valor no name:


        <input 
        placeholder="Digite o seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        />
            
4- Para mudar as infomações no campo a baixo você vai precisar criar uma função para armazenar as infomações do fumulario dentro de um objeto usando use state:

- Criar o objeto onde vai ser armazenado os valores:

        const [user, setUser] = useState({})

- Criar o onSubmit e chamar a nova função:

        <form onSubmit={handleRegister}>

- Criar a função:

        function handleRegister(e){
        e.preventDefault()
        alert('usar cadastrado')

        setUser({
        nome: nome,
        email: email,
        idade: idade
        })
        }
- Mudar os valores staticos do span para os valores armazenados no objeto user:

        <span>Bem vindo: {user.nome}</span><br/>
        <span>Email: {user.email}</span><br/>
        <span>Idade: {user.idade}</span><br/>

### Resultado final: 

    import { useState } from "react";

    function App() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [idade, setIdade] = useState("")

    const [user, setUser] = useState({})


    function handleRegister(e){
        e.preventDefault()
        alert('usar cadastrado')

        setUser({
        nome: nome,
        email: email,
        idade: idade
        })
    }

    return (
        <div>
        <h1>Cadastrando user</h1>
        <form onSubmit={handleRegister}>
            <label>Nome:</label><br/>
            <input 
            placeholder="Digite o seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            /><br/>
            
            <label>Email:</label><br/>
            <input 
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /><br/>
            
            <label>Idade:</label><br/>
            <input 
            placeholder="Digite o seu idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}/><br/>

            <button type="submit">Registrar</button>

        </form>

        <br/>
        <br/>

        <div>
            <span>Bem vindo: {user.nome}</span><br/>
            <span>Email: {user.email}</span><br/>
            <span>Idade: {user.idade}</span><br/>

        </div>
        </div>
    );
    }

    export default App;

## Manipulando lista atravez do useState e form

1- Imporar o useState

    import { useState } from "react";

2- Criar 1 variavel para armazenar o valor do input useState

    const [input, setInput] = useState("")

3- Criar uma variavel para armazenar a lista de exibição usando useState

    const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React'
    ])

4- Criar um fomulario basico

    <h1>Cadastrando user</h1>
    <form>
    <label>Nome da tarefa:</label><br/>
    <input 
    placeholder="Digite a tarefa"
    />
    <br/>

    <button type="submit">Registrar</button>

5- adicionar no input as proriedades velue, onChange para armazenar o valor atual na variavel input e setar a nova atravez do setInput:

    <input 
    placeholder="Digite a tarefa"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    /><br/>

6- Chamar uma função chamada handleRegister quando for apertado o botão do formulario:

    <form onSubmit={handleRegister}>

7- Criar a função para pegar todas as infomações que já existem na lista e adicionar o novo item:

    function handleRegister(e){
        e.preventDefault()
        setTarefas([...tarefas, input])
    }

8- Criar uma ul e dentro da ul usar o .map para percorrer toda a lista (tarefas) e criar uma li com cada item dentro da lista:

    <ul>
        {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
        ))}
    </ul>

Observação: todas as li tem que receber uma key unica, caso isso não seja feito é mostrado o erro no console.

Codigo final:

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

## Aprendendo a usar o useEffect

### Resumo
UseEffect é um hook muito utilizado, ele tem a função de executar um bloco de codigo em 3 situaçõs que são, quando alguem abre a pagina, quando alguem muda de pagina e quando uma variavel é alterada.

### Projeto de aplicação
Criar a litas de tarefas e atravez do useEffect armazenar no localstorege sempre que a lista for alterada e tamebem ao abrir o site buscar todos os dados que foram armazenados, então vamos reutilizar o codigo do ultimo projeto

1- Importar o useEffect

    import { useState, useEffect } from "react";

2- Usar o useEffect para salvar no localStorage sempre que a variavel tarefas for alterado para isso colocamos a variavel tarefas entro de [] e dentro de {} colocamos o codigo para armazenar:

    useEffect(() =>{
    localStorage.setItem('@tarefa',JSON.stringify(tarefas))
    }, [tarefas])

Observação: não podemos armazenar no localStorage uma lista então usamos o JSON para converter para texto.

3- Usar o useEffect para buscar todos os itens que estão na lista armazenada no localStorage sempre que o site abrir:

    useEffect(() =>{
        const tarefasStorage = localStorage.getItem('@tarefa')
        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])

Observação: Antes de colocar as infomações na lista precisamos tranformar o que veio do local em uma lista novamente.

Resolver friar uma outra função para exluir intens da lista:

1- 


    

