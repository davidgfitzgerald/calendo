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
    cy.findAllByRole('listitem').spread((items) => {
      items.should('have.length', 2)
    })
    // thing.spread((firstItem, secondItem) => {
    //   firstItem.should('have.text', 'a')
    //   secondItem.should('have.text', 'a')
    // })
  })
})


// test('drag and drop a to b', async () => {
//   const toDoData = [
//     { "title": "a" },
//     { "title": "b" },
//   ]

//   const user = userEvent.setup()

//   const { container } = render(
//     <ScrollColumnContainer>
//       <ScrollColumn
//         startingHeight={270}
//         elements={toDoData.map((item, index) => {
//           return <ToDo title={item.title} key={uuidv4()} index={index} />
//         })}>
//       </ScrollColumn>
//     </ScrollColumnContainer>
//   )

//   cy.get

//   let [firstItem, secondItem] = screen.getAllByRole('listitem')
//   await user.click(secondItem)

//   let [thirdItem, fourthItem] = screen.getAllByRole('listitem')

//   expect(firstItem).toHaveTextContent('b')
//   expect(secondItem).toHaveTextContent('a')
// })