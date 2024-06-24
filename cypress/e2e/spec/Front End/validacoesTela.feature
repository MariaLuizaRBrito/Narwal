#language:pt

Funcionalidade: Validações no site da Narwal
    
  Cenário: Verificar os módulos disponíveis
    Dado que acesso o site da Narwal
    E verifico que estou na página principal
    Quando clico no menu 'Módulos'
    Então devo ser redirecionado para a página 'Módulos'
    E visualizo os seguintes módulos disponíveis: 
    |Módulos| 
    |Importação|
    |Exportação|
    |Despachante|
    |Trading|
  
  Cenário: Solicitar uma demostração através do preenchimento do formulário
    Dado que acesso o site da Narwal
    Quando clico no botão 'Solicite uma demonstração'
    Então devo ser redirecionado para a página 'Contato'
    Quando preencho o campo 'Nome' com o valor 'Teste'
    E preencho o campo 'Email' com o valor 'teste@gmail.com'
    E preencho o campo 'Telefone' com o valor '19999999999'
    E preencho o campo 'Empresa' com o valor 'Teste'
    E seleciono a opção 'Importação e Exportação' no combo 'Segmento'
    E clico no botão 'Enviar'
    Então visualizo a mensagem 'Não foi possível enviar o formulário. Entre em contato com o administrador do site.'



