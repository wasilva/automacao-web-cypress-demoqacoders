require("cypress-video/commands.js")

Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#login').click()

    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login');
    });
    
    cy.get('body > nav > button').should('be.visible');
  });