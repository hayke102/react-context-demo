import React from "react";
import { useTodosContext } from "./todosContext";

export default function NavBar() {
    const { todos } = useTodosContext();

    return (
        <div
            className="w-full flex-hcenter p-0.5 text-white"
            style={{ backgroundColor: "#282828" }}
        >
            <h1>Todos {todos.length}</h1>
        </div>
    );
}
