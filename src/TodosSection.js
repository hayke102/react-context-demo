import React, { useState } from "react";
import TodoList from "./TodoList";
import FilterInput from "./FilterInput";
import { INITIAL_TODOS } from "./todosData";

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
