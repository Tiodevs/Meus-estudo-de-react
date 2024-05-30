### Iniciar o projeto

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


### O que são componentes

resumo:

    Componentes são partes de codigos que podem ser usadas uma ou mais vezes no projeto, por exemplo. Podemos criar um componente so para o menu do site, e assim em todas as paginas do nosso projeto podem usar o mesmo codigo sem precisar repetir ele varias vezes. Oura vantagem de usar componente e de que fica mais facil e rapido de fazer manutenção e manter um padrão nas paginas o que a longo prazo evita problemas e economiza tempo

como criar um componte:
    
    Todo componente é uma função e ela precisa ser exportada para que outros arquivos poçam usar-las, exemplo de função:

    function Mensagem(){
        return(
            <h1>Meu nome é: Felipe</h1>
        )
    }

    export default Mensagem;

Observações:
    Todo componente precisa começar com a letra maiuscula, para inportar o componente em outro arquivo basta fazer o seguinte:

        import Mensagem from './Mensagem';

    e escrever aonde quiser colocar o componente: 
        <Mensagem/>

### Proriedades

resumo:

    As proriedades tornam possiveis deixar os componentes mais personalizaveis(dinamicos), podendo passar proriedades ao chamar o componente e o componente pode receber essas propriedades como parametro dentro da função do elemento, 
    
Como usar:
    
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

### Como usar Hooks/ UseState:

resumo:

    As proriedade e variaveis elas tem um valor que não pode ser alterado durante a execução do site, atravez dos hooks nos podemos tornar isso dinamico.

Importar os Hooks:

    No começo do codigo escrev: import { useState } from "react";

Criar a constante em que o use state vai armazenar o valor:

    const [nome, setNome]= useState("Felipe")

    Observação: Toda vez que usarmos hooks vamos ter que criar 2 variaveis, uma para gardar o valor atual e outra para alterar o valor atual. A qua altera o valor tem por padrão o começo com "set" e sepois o nome da primeira variavel. Tudo que colocarmos dentro do useState("Felipe") vai ser considerado um valor padrão, nesse caso foi uma string mas no futuro isso pode ser um objeto, array e etc.

