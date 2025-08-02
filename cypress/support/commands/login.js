// Preenche os campos username e senha e clica no botão de login

Cypress.Commands.add('preencherCamposLogin',(user, senha) =>{
    
    cy.get('input[id="username"]').type(user)
    cy.get('#senha').type(senha)
    cy.get('[onclick="login()"]').click()
    

})