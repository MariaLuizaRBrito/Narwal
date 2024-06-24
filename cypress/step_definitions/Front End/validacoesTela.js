/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Validacoes from '../../pages/validacoesTela/validacoes'

// CASO-1
Given("que acesso o site da Narwal", () => {
  Validacoes.acessarSite()
})

Given("verifico que estou na página principal", () => {
  Validacoes.verificarPaginaInicial()
})

Given("clico no menu {string}", (menu) => {
  Validacoes.clicarMenu(menu)
})

When("devo ser redirecionado para a página {string}",(pagina) => {
  Validacoes.verificarUrl(pagina)
})

Then("visualizo os seguintes módulos disponíveis:", () => {
  Validacoes.verificarModulos()
})

Given("clico no botão {string}", (nomeBtn) => {
  Validacoes.clicarBtn(nomeBtn)
})

When('preencho o campo {string} com o valor {string}', (nomeCampo,valor) => {
  Validacoes.preencherCampo(nomeCampo,valor)
})

When('seleciono a opção {string} no combo {string}', (opcao, nomeCombo) => {
  Validacoes.selecionarOpcao(opcao, nomeCombo)
})

Then('visualizo a mensagem {string}', (msg) => {
 Validacoes.visualizoMsg(msg)
})