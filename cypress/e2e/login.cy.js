/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
});

describe('Login', () => {
    it('Login com sucesso', () => {

        let username = 'sysadmin@qacoders.com';
        let password = '1234@Test';

        cy.login(username, password)

    });

    it('Login com e-mail válido e a senha inválida', () => {
        cy.get('#email').type('sysadmin@qacoders.com');
        cy.get('#password').type('1234@');
        cy.get('#login').click();

        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text','E-mail e/ou senha inválidos');
    });

});