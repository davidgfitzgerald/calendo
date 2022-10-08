import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import { getAllByRole, render, screen } from '@testing-library/react'
import { ScrollColumnContainer, ScrollColumn, ToDo } from './ScrollingColumns'
import { v4 as uuidv4 } from 'uuid';

test('displays to-dos', async () => {
  const toDoData = [
    { "title": "a" },
    { "title": "b" },
  ]

  const { container } = render(
    <ScrollColumnContainer>
      <ScrollColumn
        startingHeight={270}
        elements={toDoData.map((item, index) => {
          return <ToDo title={item.title} key={uuidv4()} index={index} />
        })}>
      </ScrollColumn>
    </ScrollColumnContainer>
  )

  const [firstItem, secondItem] = screen.getAllByRole('listitem')

  expect(firstItem).toHaveTextContent('a')
  expect(secondItem).toHaveTextContent('b')
})

test('drag and drop a to b', async () => {
  const toDoData = [
    { "title": "a" },
    { "title": "b" },
  ]

  const user = userEvent.setup()

  const { container } = render(
    <ScrollColumnContainer>
      <ScrollColumn
        startingHeight={270}
        elements={toDoData.map((item, index) => {
          return <ToDo title={item.title} key={uuidv4()} index={index} />
        })}>
      </ScrollColumn>
    </ScrollColumnContainer>
  )

  let [firstItem, secondItem] = screen.getAllByRole('listitem')
  await user.click(secondItem)

  let [thirdItem, fourthItem] = screen.getAllByRole('listitem')

  expect(firstItem).toHaveTextContent('b')
  expect(secondItem).toHaveTextContent('a')
})