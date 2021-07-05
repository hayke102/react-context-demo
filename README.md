-   # create toggle done function
-   # connect it to TodoItem
-   # create context, provider, hook
-   # composition
-   # custom hooks

```jsx
const markDone = (id) => {
    const newTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
};

const markDone = (id) => {
    const newTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    setTodos([
        ...todos.slice(0, index),
        { ...todos[index], done: !todos[index].done },
        ...todos.slice(index + 1),
    ]);
};
```
