import React from 'react';

describe('Smoke test', () => {
  it('Can load root', () => {
    cy.visit('/')
  })

})

describe('Drag and drop', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it("Has 3 items on the page", () => {
    cy.get("li")
      .first().should('have.text', "Item1")
      .next().should('have.text', "Item2")
      .next().should('have.text', "Item3")

  })

  it('display to-dos', () => {

    cy.get("li")
      .first().should('have.text', 'Item1')
      .next().should('have.text', 'Item2')
  })

  it('drag and drop a to b', () => {
    const dataTransfer = new DataTransfer

    cy.get("li")
      .first().should('have.text', 'Item1')
      .trigger('dragstart', {
        dataTransfer,
        force: true
      })
      .next().should('have.text', 'Item2')
      .trigger('drop', {
        dataTransfer,
        force: true
      })

    cy.get("li")
      .first().should('have.text', 'Item2')
      .next().should('have.text', 'Item1')
  })

  xit('drag and drop a to c', () => {
    const dataTransfer = new DataTransfer

    cy.get("li")
      .first().should('have.text', 'a')
      .trigger('dragstart', {
        dataTransfer,
        force: true
      })
      .next().should('have.text', 'b')
      .next().should('have.text', 'c')
      .trigger('drop', {
        dataTransfer,
        force: true
      })

    cy.get("li")
      .first().should('have.text', 'b')
      .next().should('have.text', 'c')
      .next().should('have.text', 'a')
  })

})
