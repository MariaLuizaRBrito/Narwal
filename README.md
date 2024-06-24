# Testes Automatizados

Este projeto contém testes automatizados de Front End e Back End utilizando o framework Cypress.

Os testes do Front End contemplam cenários automatizados na página da Narwal Sistema, focando no comportamento do site. 
Já os testes Back End contemplam cenários de criação, exclusão e verificação de repositórios e issues através da integração com a API do GitHub. 

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- Um editor de código (recomendado [Visual Studio Code](https://code.visualstudio.com/))

## Configuração do Projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Instale as dependências do projeto:**

   ```bash
   cd nome-do-repositorio
   npm install
   ```

3. **Configurações necessárias para funcionamento da API:**

   - Para que a parte da API do GitHub funcione corretamente,no arquivo `cypress.env.json` configure suas variáveis de ambiente informando: 

     ```json
     {
       "GITHUB_TOKEN": "seu-token-de-autenticacao-do-GitHub",
       "GITHUB_USERNAME": "seu-nome-de-usuario-no-GitHub"
     }
     ```

     Certifique-se de que o token tenha permissões necessárias para as operações que serão realizadas nos testes.

4. **Criação do Token**

   - Acesse o GitHub(https://github.com/)
   - Clique em seu perfil no canto superior direito
   - Clique em 'Settings' ou 'Configurações'
   - Será aberta a página de configurações
   - No menu esquerdo selecione 'Developer Settings' 
   - Clique na opção 'Personal acesss Token'
   - E clique em 'Tokens (classic)'
   - Clique em 'Generate new Token'
   - Selecione a opção 'Generate new Token (classic)'
   - Marque todas as opções disponiveis
   - Clique no botão 'Generate token'
   - Seu token será gerado com sucesso 
   - Após a geração copie o Token e informe-o no documento `cypress.env.json`

5. **Informações importantes** 

   - No arquivo  `integracao.js` informar nas variaveis: 
      - nomeRepositorio - o nome do novo repositório a ser criado
      - descRepositorio - a descrição do repositório
      - nomeIssue - o nome da Issue a ser criada
      - descIssue - a descrição da Issue

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```bash
npx cypress open
```

Este comando inicia o Cypress, e executa os testes. 
