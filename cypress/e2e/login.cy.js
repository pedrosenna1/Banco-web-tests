describe('login',()=>{
  beforeEach(()=>{
    cy.visitarPagina()



  })

  it('login com credenciais validas', ()=>{
  cy.fixture('inputLogin.json').then((usuario)=>{
  cy.loginValido(usuario.username, usuario.senha)})

})

  it('login com credenciais invalidas',()=>{
      cy.loginInvalido('pedro','1234')
      


  })
})


