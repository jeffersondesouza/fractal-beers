# Fractal Cervas 

[Link da webapp](https://fractalcervas.firebaseapp.com/#/)

Web App para listagem de Cervejas, desenvolvido em React como parte dos testes da Fractal Tecnologia.

OBS: Os textos da aplicação encontran-se em português, mas os códigos/documentação estão em inglês para que determinados design patters sejam mais semânticos 

## Getting Started

O projeto foi desenvolvido utilizando:
  - React como framework principal;
  - Webpack para empacotar os módulos da aplicação realizando minificações e etc (Por opção, não foi feito uso ```create-react-app```, tudo foi configurado não mão);
  - Babel para transpilar os arquivos ES6 para versões suportadas pelo navegador;
  - Sass como pré processador CSS;
  - Redux para tartar dos estados na plicação;
  - React Route para tratar das rotas;
  - Mocha, Sinon e Chai para testes de unudade;
  - Instambul para cobertura de testes
  
### Requisitos
É necessário o ```Node``` instalado na máquina, por segurança também instalar o Webpack, apaenasr do mesmo está nas dependências de desenvolvimento

### Instalação 
#### Certifique-se  de estar na pasta WEBAPP

Instalação das dependências do projeto: 
```
npm install 
```

Para subir a aplicação localmente:
```
npm start
```

Para fazer o build de no ambiente de desenvolvimento.  
```
npm build
```

Para fazer o build de produção, sendo gerado o bundle na pasta 'dist', com os arquiovos minificados e otimizados.    
```
npm build
```

## Rodando os Tests

Para rodar os testes basta dar o comando 
```
npm test
```

Para rodar os testes em modo de watch, fazendo os mesmo se atualizarem a cada mudança nos arquivos basta dar o comando 
```
npm tdd
```

Para conferir a cobertura de testes basta dar o comando 
```
npm coverage
```


### Depoly 

Para realizar o deploy deve-se ter instalado o firebase globalmente

```
npm install -g firebase-tools 
```
O comando de deploi erá criar o bundle de produção com as orimizações d e aruivo necessárias e em seguida mandará o projeto ao servido do firebase
```
npm run deploy  
```



## Objetivos do teste

* [OK] Implementar um Web App que consulte uma API e exiba uma lista de cervejas. 
* [OK] Na listagem deve ser exibido o nome e tagline. 
* [OK] Ao selecionar um item na lista, exibir a tela de detalhes, contendo: nome, tagline, descrição e imagem.


## Requisitos

* [OK] Utilizar a seguinte API no desafio: https://punkapi.com/documentation/v2;
Utilizar a lib React;
* [OK] Criar a aplicação toda em componentes;
Seguir os padrões e convenções do HTML, CSS e Javascript;
* [OK] Utilizar o Webpack;
* [OK] Utilizar npm para gerenciar a aplicação;
* [OK] Enviar o código para um repositório git público (github, Bitbucket, Gitlab);

## Bônus

* [OK] Implementar Testes Unitários e Funcionais;
* [OK] Implementar testes com Mocha, Sinon e Chai;
* [OK] Utilizar uma lib para o uso de rotas (React Routes);
* [OK] Utilizar uma lib para o gerenciamento de state (Redux);
* [OK] Utilizar axios para requisições HTTP na API;
* [OK] Utilizar code coverage (Karma, Istambul, Jasmine);
* [OK] Utilizar SASS Transpiler pra CSS;
* [OK] Aplicação rodando em um servidor e o acesso a uma URL;
* [OK] Implementação de um deploy;

