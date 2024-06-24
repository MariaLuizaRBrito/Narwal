/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

// CASO-1
Given("que acesso o site da Narwal", () => {
  cy.visit('https://www.narwalsistemas.com.br/')
  cy.get('.elementor-element-fd8c4b1 > .elementor-widget-container > .elementor-heading-title')
    .should('exist')
    .trigger('mousemove')
  // cy.window().then((win) => {
  //   expect(win.wpforms_settings).to.exist})
  // cy.intercept({resourceType: /xhr|fetch/}, {log: false})
  // cy.on('uncaught:exception', (err, runnable) => {
  //   expect(err.message).to.include('something about the error')

  //   // using mocha's async done callback to finish
  //   // this test so we prove that an uncaught exception
  //   // was thrown
  //   done()

  //   // return false to prevent the error from
  //   // failing this test
  //   return false
  // })
  // cy.debug()
  // cy.intercept('**').as('allRequests')
  // cy.wait('@allRequests', { timeout: 10000 })
  // cy.get('.nld-infobar', {timeout: 10000}).should('be.visible')
  // cy.get('.nld-scrollable').should('not.be.visible')
})

Given("verifico que estou na página principal", () => {
  cy.get('.elementor-element-fd8c4b1 > .elementor-widget-container > .elementor-heading-title').should('have.text', 'Impulsione sua gestão de comércio exterior e logística internacional com a Narwal Sistemas')
 

})

Given("clico no menu {string}", (menu) => {
  switch(menu){
    case 'Módulos': 
      cy.intercept('GET', 'https://popups.rdstation.com.br/popup/show.json*', {})
      cy.get('#menu-1-6ea92598 > .menu-item-has-children > .elementor-item')
      .click()
    break
  }
})

When("serei redirecionado para a página {string}",(pagina) => {
  switch(pagina){
    case 'Módulos':
      cy.url().should('include', '/modulos')
      cy.get('.elementor-element-5bc5329 > .elementor-widget-container > .elementor-heading-title')
        .should('have.text', 'Módulos Disponíveis')
    break
    case 'Contato':
      cy.url().should('include','/contato/')
    break
  }
})

Then("visualizo os módulos disponíveis pela Narwal", () => {
  cy.get('.ha-flip-box-front-inner >.ha-text >.ha-flip-box-heading')
    .should('have.text', 'ImportaçãoExportaçãoTradingDespachante' )
})

Given("clico no botão {string}", (nomBtn) => {
  switch(nomBtn){
    case 'Solicite uma demonstração':
      cy.intercept('GET', 'https://popups.rdstation.com.br/popup/show.json*', {})
      cy.get('.elementor-element-71a130c > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
        .click()

      cy.wait(5000)
    break
  }
  
})





