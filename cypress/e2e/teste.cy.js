describe('Seu teste', () => {
    it('Deve acessar variáveis de ambiente', () => {
     
        cy.log(Cypress.env('CYPRESS_EMAIL'))
        cy.log(Cypress.env('CYPRESS_EMAIL2'))
    
        // Use as variáveis nos seus testes
        // cy.log('Email:', email);
        // cy.log('Senha:', password);
      });

  });