import React, { useState } from "react";
import TodoList from "./TodoList";
import FilterInput from "./FilterInput";
import { TodosContextProvider, useTodosContext } from "./todosContext";

export default function TodosSection() {
    const [filter, setFilter] = useState("");
    const { todos } = useTodosContext();

    return (
        <span className="flex-hcenter m-2">
            <span className="flex-column">
                <span className="m-0.5">
                    <FilterInput onChange={setFilter} />
                </span>

                <span className="m-0.5">
                    {todos && (
                        <TodoList
                            todos={todos.filter((todo) =>
                                todo.title.includes(filter)
                            )}
                        />
                    )}
                </span>
            </span>
        </span>
    );
}
