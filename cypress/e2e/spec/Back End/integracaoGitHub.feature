#language: pt
Funcionalidade: Integração com a API do GitHub

  Cenário: Criar um novo repositório no GitHub via API
    Dado que criei o repositório no GitHub via API
    Quando verifico que o repositório foi criado com sucesso
    Então crio uma issue dentro do repositório
    E verifico que a issue criada corretamente
    Então excluo o repositório criado
    E verifico que o repositório foi excluido com sucesso