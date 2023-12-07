/// <reference types="cypress" />
const data1 = require('../fixtures/data.json')

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
});

describe('Login', () => {
    it('Login com sucesso', () => {
        const email = Cypress.env('CYPRESS_EMAIL');
        const password = Cypress.env('CYPRESS_PASSWORD');
        cy.login(email, password)
    });

    it('Login com e-mail válido e a senha inválida', () => {
        cy.get(data1.email).type('sysadmin@qacoders.com');
        cy.get('#password').type('1234@');
        cy.get(data1.btnEntrar).click();

        cy.get(data1.msgAlertEmail).should('be.visible');
        cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text', 'E-mail e/ou senha inválidos');
    });

});