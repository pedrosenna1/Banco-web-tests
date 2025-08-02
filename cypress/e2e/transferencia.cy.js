/// <reference types="cypress" />

describe('Transferencias',()=>{
    beforeEach(() => {
        cy.visitarPagina()
        cy.fixture('inputLogin.json').then((usuario) => {
            cy.preencherCamposLogin(usuario.username, usuario.senha)
        })
    })


    it('Deve transferir quando informo dados e valor validos', () => {
        // act
        cy.realizarTransferencia('João da Silva','Maria','20')

        // assert
        cy.verificarTextoVisivel('Transferência realizada!')

    })


})