import { ScrollColumnContainer, ScrollColumn } from '../../src/components/ScrollingColumns/ScrollingColumns'
import React from 'react';

describe('ScrollingColumns.cy.ts', () => {
  it('display to-dos', () => {
    const toDoData = [
      { "title": "a" },
      { "title": "b" },
    ]

    cy.mount(
      <ScrollColumnContainer>
        <ScrollColumn
          startingHeight={270}
          todos={toDoData}
        >
        </ScrollColumn>
      </ScrollColumnContainer>
    )
    cy.get("li")
      .first().should('have.text', 'a')
      .next().should('have.text', 'b')
  })

  it('drag and drop a to b', () => {
    const toDoData = [
      { "title": "a" },
      { "title": "b" },
    ]

    cy.mount(
      <ScrollColumnContainer>
        <ScrollColumn
          startingHeight={270}
          todos={toDoData}
        >
        </ScrollColumn>
      </ScrollColumnContainer>
    )

    const dataTransfer = new DataTransfer

    cy.get("li")
      .first().should('have.text', 'a')
      .trigger('dragstart', {
        dataTransfer,
        force: true
      })
      .next().should('have.text', 'b')
      .trigger('drop', {
        dataTransfer,
        force: true
      })


    cy.get("li")
      .first().should('have.text', 'b')
      .next().should('have.text', 'a')
  })

  it('drag and drop a to c', () => {
    const toDoData = [
      { "title": "a" },
      { "title": "b" },
      { "title": "c" },
    ]

    cy.mount(
      <ScrollColumnContainer>
        <ScrollColumn
          startingHeight={270}
          todos={toDoData}
        >
        </ScrollColumn>
      </ScrollColumnContainer>
    )

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
