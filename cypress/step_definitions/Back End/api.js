/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import Integracao from "../../pages/api_GitHub/integracao"

const nomeRepositorio = 'teste_narwal_5' //Nome do repositório a ser criado 
const descRepositorio = 'Repositório criado via API do GitHub para teste BackEnd utilizando o Cypress' //Descrição do repositório
const nomeIssue = 'Nova Issue' //Nome da issue a ser criada
const descIssue = 'Descrição da nova issue' //Descrição da issue

Given("que criei o repositório no GitHub via API", () => {
 Integracao.criarRepositorio()
})

When("verifico que o repositório foi criado com sucesso", () => {
Integracao.verificarRepositorio()
})

Then("crio uma issue dentro do repositório", () => {
  Integracao.criarIssue()
})

Then("verifico que a issue criada corretamente", () => {
  Integracao.verificarIssue()
})

Then("excluo o repositório criado", () => {
Integracao.excluirRepositorio()
})

Then("verifico que o repositório foi excluido com sucesso", () => {
Integracao.verificarRepositorioExcluido()
})
