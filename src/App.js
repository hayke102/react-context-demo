import "./App.css";
import NavBar from "./NavBar";
import TodosSection from "./TodosSection";
import React, { useState } from "react";
import { TodosContextProvider } from "./todosContext";
import { INITIAL_TODOS } from "./todosData";

function App() {
    const [todos, setTodos] = useState(INITIAL_TODOS);

    const markDone = (id) => {
        const index = todos.findIndex((todo) => todo.id === id);
        setTodos([
            ...todos.slice(0, index),
            { ...todos[index], done: !todos[index].done },
            ...todos.slice(index + 1),
        ]);
    };

    return (
        <span className="flex-column">
            <TodosContextProvider value={{ todos, markDone }}>
                <NavBar />
                <TodosSection />
            </TodosContextProvider>
        </span>
    );
}

export default App;
