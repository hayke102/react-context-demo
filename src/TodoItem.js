import React from "react";

export default function TodoItem({ todo }) {
    return (
        <div
            style={{ borderRadius: "8px", backgroundColor: "#d25656" }}
            className="p-1 text-white"
            onClick={() => {
                // TODO: toggle todo.done
            }}
        >
            <input type="checkbox" checked={todo.done} /> {todo.title}
        </div>
    );
}
