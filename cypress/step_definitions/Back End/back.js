/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

const nomeRepositorio = 'Narwal' //Nome do repositório a ser criado 
const descRepositorio = 'Repositório criado via API do GitHub para teste BackEnd utilizando o Cypress' //Descrição do repositório
const nomeIssue = 'Nova Issue' //Nome da issue a ser criada
const descIssue = 'Descrição da nova issue' //Descrição da issue

Given("que criei um repositório no GitHub via API", () => {
  cy.request({
    method: 'POST',
    url: 'https://api.github.com/user/repos',
    headers: {
      Authorization: `Bearer ${Cypress.env("GITHUB_TOKEN")}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body: {
      name: nomeRepositorio,
      description: descRepositorio,
      private: false
    },
  }).then((response) => {
    expect(response.status).to.equal(201);
    Cypress.env(nomeRepositorio);
    cy.log(`O repositório "${nomeRepositorio}" foi criado com sucesso`);
  })
})

When("verifico que o repositório foi criado com sucesso", () => {
  cy.request({
    method: 'GET',
    url: `https://api.github.com/repos/${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}`,
    headers: {
      Authorization: `Bearer ${Cypress.env("GITHUB_TOKEN")}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body:
    {
      title: nomeIssue,
      body: descIssue
    }
  }).then((response) => {
    expect(response.status).to.equal(200)
    cy.log(response.body)
    expect(response.body.full_name).to.eq(`${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}`)
    cy.log(`Repositório "${nomeRepositorio}" foi encontrado`)
  })
})

Then(" o repositório deve estar acessível e visível na interface do GitHub", () => {
  cy.visit(`https://github.com/${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}`);
})

Then("crio uma issue dentro do repositório", () => {
  cy.request({
    method: 'POST',
    url: `https://api.github.com/repos/${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}/issues`,
    headers: {
      Authorization: `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body: {
      title: nomeIssue,
      body: descIssue,
    },
  }).then((response) => {
    expect(response.status).to.eq(201);
    cy.log(`Issue "${nomeIssue}" criada com sucesso`);
  })
})

Then("verifico que a issue criada corretamente", () => {
  cy.request({
    method: 'GET',
    url: `https://api.github.com/repos/${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}/issues`,
    headers: {
      Authorization: `Bearer ${Cypress.env("GITHUB_TOKEN")}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    body:
    {
      title: nomeIssue,
      body: descIssue
    }
  }).then((response) => {
    expect(response.status).to.equal(200)
    cy.log(response.body)
    cy.log(`A issue "${nomeIssue}" foi encontrada`)
  })
})

Then("excluo o repositório criado", () => {
  cy.request({
    method: 'DELETE',
    url: `https://api.github.com/repos/${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}`,
    headers: {
      Authorization: `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }).then((response) => {
    expect(response.status).to.eq(204);
    cy.log(`O repositório "${nomeRepositorio}" foi excluído com sucesso`)
  })
})

Then("verifico que o repositório foi excluido com sucesso", () => {
  cy.request({
    method: 'GET',
    url: `https://api.github.com/repos/${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}`,
    headers: {
      Authorization: `Bearer ${Cypress.env('GITHUB_TOKEN')}`,
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28'
    },
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.eq(404);
    cy.log(`O repositório "${nomeRepositorio}" foi excluído e por isso não foi encontrado`);
  });
})
