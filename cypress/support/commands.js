// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('visitarPagina',() =>{
    cy.visit(Cypress.env('baseURL'))
    cy.url().should('contain', Cypress.env('baseURL'))


})


Cypress.Commands.add('loginValido',(user, senha) =>{
    
    cy.get('input[id="username"]').type(user)
    cy.get('#senha').type(senha)
    cy.get('[onclick="login()"]').click()
    cy.contains('Realizar Transferência').should('be.visible')

})

Cypress.Commands.add('loginInvalido',(user, senha) =>{
    
    cy.get('input[id="username"]').type(user)
    cy.get('#senha').type(senha)
    cy.get('[onclick="login()"]').click()
    cy.get('[id="toast-container"]').should('have.text','Erro no login. Tente novamente.')
    

})