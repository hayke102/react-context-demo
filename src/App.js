import "./App.css";
import NavBar from "./NavBar";
import TodosSection from "./TodosSection";
import React, { useState } from "react";
import { TodosContextProvider } from "./todosContext";
import { INITIAL_TODOS } from "./todosData";

function App() {
    const [todos, setTodos] = useState(INITIAL_TODOS);

    const markDone = (id) => {
        const newTodos = [...todos];
        const index = todos.findIndex((todo) => todo.id === id);
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
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
