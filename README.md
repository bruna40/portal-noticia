# Portal de Notícias

## Descrição

* Tecnologias utilizadas:
    * Typescript
    * NextJS
    * Stitches

## Como rodar o projeto

* Instale as dependências com `yarn install`
* Rode o projeto com `yarn dev`
* Acesse o projeto em `http://localhost:3000`

## Pastas e arquivos

* `src/pages`: Contém as páginas do projeto
* `src/components`: Contém os componentes do projeto
* `src/styles`: Contém os estilos globais do projeto
* `src/pages/index.tsx`: Contém a página inicial do projeto, que lista as notícias
* `src/pages/new/[id].tsx`: Contém a página de detalhes da notícia
* `src/pages/_document.tsx`: Contém o documento HTML do projeto
* `src/service/fetch`: Contém a função de requisição da API

## API

* A API utilizada foi a [GNews API]


## Problemas ocorridos

* Estou tendo problemas quando para a pagina de notícias, pois a API não está retornando os dados corretamente, e não consegui resolver a tempo.
* Algumas noticias estão indo, mas outras não. para não da problema direto resolvi encaminhar para o 404.
*Outro problema que a API possui numero maximo de requisições, e quando passa desse numero ela para de funcionar, então senti dificuldade em fazer o projeto por conta disso.
*Outro problema foi em relação a tag Image, ia fazer varias requisições para a API, e isso is consumir a quantidade liberada para requição da API, entao coloquei a tag img do html mesmo, para nao ter esse problema.
*E não consegui mostrar o content da noticia completa devido ao número de requisições e ao tempo