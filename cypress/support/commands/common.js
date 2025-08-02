// Visita a pagina selecionada e confirma se está na pagina
Cypress.Commands.add('visitarPagina',() =>{
    cy.visit(Cypress.env('baseURL'))
    cy.url().should('contain', Cypress.env('baseURL'))


})

// Verifica se um texto é visivel na página

Cypress.Commands.add('verificarTextoVisivel',(texto) => {
    cy.contains(texto).should('be.visible')


})