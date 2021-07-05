import { createContext, useContext } from "react";

export const todosContext = createContext({
    todos: [],
    markDone: (id) => {},
});

export const TodosContextProvider = todosContext.Provider;
export const useTodosContext = () => useContext(todosContext);
