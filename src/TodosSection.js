import React, { useState } from "react";
import TodoList from "./TodoList";
import FilterInput from "./FilterInput";

const INITIAL_TODOS = [
    { title: "My first todo", done: false },
    { title: "Do Pakalim 💥", done: true },
    { title: "Do 10 final exercises", done: false },
    { title: "Cake break 🎂", done: false },
];
export default function TodosSection() {
    const [filter, setFilter] = useState("");
    const [todos, setTodos] = useState(INITIAL_TODOS);

    return (
        <span className="flex-hcenter m-2">
            <span className="flex-column">
                <span className="m-0.5">
                    <FilterInput onChange={setFilter} />
                </span>

                <span className="m-0.5">
                    <TodoList
                        todos={todos.filter((todo) =>
                            todo.title.includes(filter)
                        )}
                    />
                </span>
            </span>
        </span>
    );
}
