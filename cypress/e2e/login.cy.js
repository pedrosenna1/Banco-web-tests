describe('login',()=>{
  beforeEach(()=>{
    cy.visitarPagina()

  })

  it('login com credenciais validas', ()=>{
  cy.fixture('inputLogin.json').then((usuario)=>{
  cy.preencherCamposLogin(usuario.username, usuario.senha)})
  cy.verificarTextoVisivel('Realizar Transferência')
})

  it('login com credenciais invalidas',()=>{
      cy.preencherCamposLogin('pedro','1234')
      cy.verificarTextoVisivel('Erro no login. Tente novamente')   
  })

})


