# Dakee App

Este projeto é uma aplicação construida em React TypeScript com um backend em Python. O projeto possui duas pastas principais, `backend` e `frontend`, cada uma com sua respectiva funcionalidade.

## Estrutura do Projeto

Aqui está a estrutura do projeto:

backend/
|-- pyproject.toml
|-- routers/
| |-- root.py /*Localização dos Endpoints*/
|-- models/
| |--database.py /*Modelos das bases de dados*/
| |--api.py
|-- controllers/
|-- clients/ /*Base de dados do cliente*/
| |--database.py 
|-- config.py
|-- main.py
|-- Dockerfile

frontend/
|-- build/
|-- public/
|-- src/
| |-- Components /*Componentes utilizados nas páginas*/
| |-- images /*Imagens e icons utilizados nas páginas*/
| |-- Pages /*Páginas da App*/
| |-- App.tsx
| |-- App.css
| |-- index.tsx
| |-- index.css
| |-- outros_arquivos.tsx
|-- package.json
|-- package-lock.json
|-- tsconfig.json
|-- .prettierrc
|-- Dockerfile

.gitgnore/
docker-compose.yml/
README.md/


- A pasta `backend` contém o código do servidor em Python, a pasta da base de dados do servidor e do cliente, os endpoints relacionados, os modelos de negócio e os modelos da base de dados.
- A pasta `frontend` contém os arquivos relacionados ao frontend da aplicação.

## Pré-requisitos
- Python (versão 3.11)
- Node.js (versão X.X.X)
- Docker (versão X.X.X)
- Outros requisitos específicos...


## Configuração do Ambiente

1. Clone este repositório.

- git clone <https://github.com/xxTomas312/projeto_dakee.git>

2. Instale as dependências do Node.js.

- npm i

## Executando o Projeto

1. Execute os comandos para construir e executar a aplicação usando o Docker:

- docker-compose build

- docker-compose up

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Contribuição

Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie um branch com a sua feature: `git checkout -b minha-feature`
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`
4. Faça push para o branch criado: `git push origin minha-feature`
5. Envie um pull request.
