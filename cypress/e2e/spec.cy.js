describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.contains("Login")
  })
})
