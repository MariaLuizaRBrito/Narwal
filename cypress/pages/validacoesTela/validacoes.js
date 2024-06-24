import { ELEMENTS as el } from './elements'
export default class Validacoes {

  static getAlias(aliasName){
    return super.getAlias(aliasName, al)
  }

  static acessarSite() {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    cy.visit('/')
  }

  static verificarPaginaInicial(){
    cy.get(el.TITLE.tituloPrincipal)
    .should('exist')
    cy.get(el.TITLE.tituloPrincipal)
    .should('have.text', 'Impulsione sua gestão de comércio exterior e logística internacional com a Narwal Sistemas')
  }

  static clicarMenu(menu){
    switch(menu){
      case 'Módulos': 
        cy.get(el.MENUS.modulos)
        .click()
      break
    }
  }

  static verificarUrl(pagina){
    switch(pagina){
      case 'Módulos':
        cy.url().should('include', '/modulos')
        cy.get(el.TITLE.tituloModulos)
          .should('have.text', 'Módulos Disponíveis')
      break
      case 'Contato':
        cy.url().should('include','/contato')
        cy.get(el.TITLE.tutuloContato)
          .should('have.text', 'Conheça agora o melhor software de Comércio Exterior do Brasil!')
      break
    }
  }

  static verificarModulos(){
    cy.get(el.MODULOS.listaModulos)
      .should('have.text', 'ImportaçãoExportaçãoTradingDespachante' )
  }

  static clicarBtn(nomeBtn){
    switch(nomeBtn){
      case 'Solicite uma demonstração':
        // cy.intercept('GET', 'https://popups.rdstation.com.br/popup/show.json*', {})
        cy.get(el.BTN.btnSolicitarDemonstracao)
          .click()
      break
      case 'Enviar':
        cy.get(el.BTN.btnEnviar)
          .click()
      break
    }
  }

  static preencherCampo(nomCampo, valor){  
    switch(nomCampo){
    case 'Nome':
      cy.get(el.FIELD.nome)
        .type(valor)
        .blur()
    break
    case 'Email': 
      cy.get(el.FIELD.email)
        .type(valor)
        .blur()
    break
    case 'Telefone': 
    cy.get(el.FIELD.telefone)
      .type(valor)
      .blur()
  break
  case 'Empresa': 
  cy.get(el.FIELD.empresa)
    .type(valor)
    .blur()
  break
  }}

  static selecionarOpcao(opcao, nomeCombo){
    switch(nomeCombo){
      case 'Segmento':
        cy.get(el.COMBO.segmento)
          .select(opcao)
          .blur()
    }
  }

  static visualizoMsg(msg){
    cy.get(el.MSG.erroEnviarFormulario)
      .should('have.text', msg)
  }


}