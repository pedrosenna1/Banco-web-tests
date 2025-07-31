import bodyContas from '../../cypress/fixtures/bodyContas.json'
import bodyLogin from '../../cypress/fixtures/bodyLogin.json'

describe('Login', () => {
  it('Login com credenciais válidas', () => {
  cy.intercept('POST', `${Cypress.env('baseURL')}/bff/login`, {
  statusCode: 200,
  body: bodyLogin
  }).as('login')

  cy.intercept('GET', `${Cypress.env('baseURL')}/bff/contas`, {
  statusCode: 200,
  body: bodyContas,
  }).as('contas')

  cy.intercept('GET', `${Cypress.env('baseURL')}/bff/transferencias?page=1&limit=5`, {
  statusCode: 200,
  body: {
  "page": 1,
  "limit": 5,
  "total": 0,
  "transferencias": [
    {
      "id": 0,
      "conta_origem_id": 0,
      "conta_destino_id": 0,
      "valor": 0,
      "data_hora": "2025-07-24T02:10:48.632Z"
    }
  ]
},
  }).as('transferencias')



    cy.visit(`${Cypress.env('baseURL')}`)

    cy.fixture('inputLogin.json').then((usuario)=>{
    cy.get('input[id="username"]').type(usuario.username)
    cy.get('#senha').type(usuario.senha)
    cy.get('[onclick="login()"]').click()})
    cy.wait("@login")
    cy.wait("@contas")
    cy.wait("@transferencias")
    cy.contains('Realizar Transferência').should('be.visible')
  })

  it.only('login',() =>{
    cy.fixture('inputLogin.json').then((usuario)=>{
    cy.login(usuario.username, usuario.senha)})

  })
})


