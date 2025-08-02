Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor)=>{
        cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
        cy.get('@campo-conta-origem').click()
        cy.get('@campo-conta-origem').contains(contaOrigem).click()
        cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
        cy.get('@campo-conta-destino').click()
        cy.get('@campo-conta-destino').contains(contaDestino).click()
        cy.get('[id="valor"]').type(valor)
        cy.get('button[onclick="fazerTransferencia()"]').click()




})