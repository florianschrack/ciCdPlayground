// app.spec.js created with Cypress
//
describe('The app', () => {
    it('tells that you are a person', () => {
        cy.visit('')
        cy.get('h1')
        .should('have.text', 'Hello, my name is Florian Schrack!')
    })
  })
