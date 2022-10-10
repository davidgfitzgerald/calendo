import userEvent from '@testing-library/user-event';
import { ScrollColumnContainer, ScrollColumn, ToDo } from '../../src/components/ScrollingColumns/ScrollingColumns'
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

describe('ScrollingColumns.cy.ts', () => {
  it('displays to-dos', async () => {
    const toDoData = [
      { "title": "a" },
      { "title": "b" },
    ]
  
    cy.mount(
      <ScrollColumnContainer>
        <ScrollColumn
          startingHeight={270}
          elements={toDoData.map((item, index) => {
            return <ToDo title={item.title} key={uuidv4()} index={index} />
          })}>
        </ScrollColumn>
      </ScrollColumnContainer>
    )

    cy.findAllByRole('listitem').spread((firstItem, secondItem) => {
      expect(firstItem).to.have.text('a')
      expect(secondItem).to.have.text('b')
    })
  })
  
})
