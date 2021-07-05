import React from "react";
import { useTodosContext } from "./todosContext";

export default function TodoItem({ todo }) {
    const { markDone } = useTodosContext();

    return (
        <div
            style={{ borderRadius: "8px", backgroundColor: "#d25656" }}
            className="p-1 text-white"
            onClick={() => {
                console.log(1);
                // TODO: toggle todo.done
                markDone(todo.id);
            }}
        >
            <input type="checkbox" checked={todo.done} /> {todo.title}
        </div>
    );
}
