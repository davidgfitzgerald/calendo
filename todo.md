- [ ] Check out this video for great way to make trello kanban clone: https://www.youtube.com/watch?v=YU9XJEeLjk4
    - Here is the GH repo: https://github.com/ch-hassansaeed/TrelloKanban
- [ ] 4hr30m video on a fullstack kanban app: https://www.youtube.com/watch?v=sqGowdB1tvY
    - Here is the GH repo: https://github.com/trananhtuat/fullstack-kanban-app
    - Also same author has this repo which may be useful: https://github.com/trananhtuat/react-kanban-ui/tree/main/src that uses react-beautiful-dnd though
- [ ] This video uses react-dnd: https://www.youtube.com/watch?v=aK2PD_REk7A

25/02/23

Watched this video [Drag And Drop With React Hooks From Scratch](https://www.youtube.com/watch?v=Q1PYQPK9TaM).
- Has a good CSS walkthrough
- Uses `<div className="drag-n-drop">` to hold multiple `<div className="dnd-group">` containers
- Within the `"dnd-group"` live the `"dnd-items"`
- Takes an arbitrary number of groups and then an arbitrary number of items
- Implemented the whole video up to 52mins
- [ ] Complete the video from 52mins

Read some of this article [5 React Design Patterns You Should Know](https://javascript.plainenglish.io/5-react-design-patterns-you-should-know-629030e2e2c7)
- The higher-order component pattern seems very useful for composing components, very similar to a decorator wrapping a function.
- The example it gives is: `const TodoListWithLoading = withLoading(TodoList);` which wraps a `TodoList` component with loading functionality