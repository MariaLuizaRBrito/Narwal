# Testes Automatizados

Este projeto contém testes automatizados de Back End utilizando o framework Cypress, e focando na interação com a API do GitHub.

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

3. **Configurações necessárias:**

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
   - No menu esquerdo selecione 'Developer settings' 
   - Clique na opção 'Personal acesss Token'
   - E clique em 'Tokens (classic)'
   - Clique em 'Generate new Token'
   - Clique em 'Generate new Token (classic)'
   - Marque todas as opções disponiveis
   - Seu token será gerado com sucesso 
   - Após a geração copie o Token e informe-o no documento `cypress.env json`

## Executando os Testes

Para executar os testes, utilize o seguinte comando:

```bash
npx cypress run
```

Este comando inicia o Cypress, e executa os testes. 
