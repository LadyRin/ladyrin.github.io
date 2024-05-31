// https://on.cypress.io/api

describe('smoke test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
  })
})
