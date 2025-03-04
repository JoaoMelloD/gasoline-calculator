## Importancia de tiparmos os parâmetros que esperamos em nossos componentes.
Como pode ser notado no nosso componente Header, criamos uma interface que se refere as propriedades da função Header,
e que no qual essa interface terá um Title do tipo String, ou seja, a partir disso, tipamos o tipo de valor que esperamos receber na hora de 
passarmos a propriedade ao componente e renderizar esse valor no retorno do componente

## useState
Como vimos anteriormente nos parâmetros, é percebtivel que a maneira a qual eles funcinam, torna os valores dos nossos componentes estáticos, ou seja, não mudam.
- Usando useState deixamos nosso projeto mais dinâmico
- Como usar o useState
const [estado,setEstado] = useState("");
basicamente estamos indicando um estado no primeiro valor, e o segundo vai ser o responsavel por modificar o primeiro estado.
dentro de useState() colocamos o valor inicial que desejamos que nosso estado tenha
