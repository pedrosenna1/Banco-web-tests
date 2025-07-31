describe('login',()=>{
    it('login com credenciais validas', ()=>{
    cy.fixture('inputLogin.json').then((usuario)=>{
    cy.loginValido(usuario.username, usuario.senha)})

  })
})
