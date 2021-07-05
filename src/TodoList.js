import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
    return (
        <span>
            {todos.map((todo) => (
                <span className="m-0.5">
                    <TodoItem todo={todo} />
                </span>
            ))}
        </span>
    );
}
