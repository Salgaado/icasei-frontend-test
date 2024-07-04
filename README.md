# Teste de Front-End iCasei

## Visão Geral do Projeto

Este projeto é uma aplicação micro-frontend composta por dois componentes principais: `mf_drawer` e `mf_videos`. O componente `mf_drawer` oferece links de navegação, enquanto `mf_videos` permite aos usuários buscar vídeos usando a API do YouTube, reproduzir vídeos e gerenciar uma lista de vídeos favoritos.


### Funcionalidades

#### Vídeos
- Buscar vídeos utilizando a API do YouTube.
- Reproduzir vídeos diretamente na aplicação.
- Marcar vídeos como favoritos.
- Atualizar dinamicamente o contador de vídeos favoritos.

#### Favoritos
- Exibir a lista de vídeos favoritos.

## Especificações Técnicas

### Back-End
- Node.js.

### Front-End
- HTML5, CSS.
- JavaScript puro (sem frameworks como React, Vue, Angular).

### Outros Requisitos
- Design responsivo.
- Navegação por rotas.
- Microfrontends com BFF (Backend for Frontend).
- Docker para microfronts e BFF.
- Testes unitários.

## Instruções de Configuração

### Pré-requisitos
- Node.js
- Docker
- Docker Compose
- Uma chave de API do YouTube (você pode gerar uma [aqui](https://console.developers.google.com/))


### Observações 
 - Para rodar o projeto certifíque-se de instalar as dependências (npm install) em todos os Micro-frontends
 - A porta para o Front-end está na localhost:8080
 - Usei local storage para quardar os dados dos favoritos
 - Usei o postMessage para ter a interação entre os mfs.


# ICASEI-FRONTEND-TEST

Este repositório contém um projeto com múltiplos componentes, incluindo um Backend for Frontend (BFF), front-end principal e microfrontends. Abaixo está a estrutura detalhada do diretório e uma breve descrição de cada parte.

## Estrutura do Diretório
ICASEI-FRONTEND-TEST/
├── bff/
│   ├── node_modules/
│   ├── tests/
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── front-end/
│   ├── node_modules/
│   ├── app.js
│   ├── public/
│   │   └── index.html
│   ├── Dockerfile
│   ├── package-lock.json
│   ├── package.json
│   ├── server.js
│   ├── styles.css
│   └── yarn.lock
├── mf_drawer/
│   ├── node_modules/
│   ├── public/
│   │   ├── Dockerfile
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── server.js
│   └── yarn.lock
├── mf_videos/
│   ├── node_modules/
│   ├── public/
│   │   ├── app.js
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── Dockerfile
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   └── server.js
│   └── yarn.lock
├── node_modules/
├── .env
├── docker-compose.yml
├── package-lock.json
├── package.json
└── README.md


### Em atualização...
