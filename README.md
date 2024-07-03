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
- Node.js (sugerido), mas Go, Ruby, ou qualquer outra linguagem de back-end também é aceitável.

### Front-End
- HTML5, CSS (nativo ou com pré-processadores como LESS ou SASS).
- JavaScript puro (sem frameworks como React, Vue, Angular).

### Outros Requisitos
- Design responsivo.
- Navegação por rotas.
- Código tipado.
- Microfrontends com BFF (Backend for Frontend).
- Docker para microfronts e BFF.
- Testes unitários.

## Instruções de Configuração

### Pré-requisitos
- Node.js
- Docker
- Docker Compose
- Uma chave de API do YouTube (você pode gerar uma [aqui](https://console.developers.google.com/))


.
├── mf_drawer
│   ├── src
│   ├── tests
│   ├── Dockerfile
│   └── package.json
│
├── mf_videos
│   ├── src
│   ├── tests
│   ├── Dockerfile
│   └── package.json
│
├── .env
└── docker-compose.yml

### Em atualização...
