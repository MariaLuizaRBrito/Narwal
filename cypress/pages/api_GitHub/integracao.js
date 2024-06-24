const nomeRepositorio = 'teste_narwal_4' //Nome do repositório a ser criado 
const descRepositorio = 'Repositório criado via API do GitHub para teste BackEnd utilizando o Cypress' //Descrição do repositório
const nomeIssue = 'Nova Issue' //Nome da issue a ser criada
const descIssue = 'Descrição da nova issue' //Descrição da issue

export default class Integracao {

	static criarRepositorio() {
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
			cy.log(`O repositório "${nomeRepositorio}" foi criado com sucesso`)
		})
	}

	static verificarRepositorio() {
		cy.request({
			method: 'GET',
			url: `https://api.github.com/repos/${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}`,
			headers: {
				Authorization: `Bearer ${Cypress.env("GITHUB_TOKEN")}`,
				'Content-Type': 'application/json',
				'Accept': 'application/vnd.github+json',
				'X-GitHub-Api-Version': '2022-11-28'
			},
		}).then((response) => {
			expect(response.status).to.equal(200)
			cy.log(response.body)
			expect(response.body.full_name).to.eq(`${Cypress.env('GITHUB_USERNAME')}/${nomeRepositorio}`)
			cy.log(`Repositório "${nomeRepositorio}" foi encontrado`)
		})
	}

	static criarIssue() {
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
			cy.log(`Issue "${nomeIssue}" criada com sucesso`)
		})
	}

	static verificarIssue(){
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
	}

	static excluirRepositorio(){
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
	}

	static verificarRepositorioExcluido(){
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
			cy.log(`O repositório "${nomeRepositorio}" foi excluído e por isso não foi encontrado`)
		})
	}
}