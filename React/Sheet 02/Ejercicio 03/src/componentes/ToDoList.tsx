import { useState } from "react";

interface ToDo {
    id: number;
    text: string;
}

function TodoList() {
    const [contador, setContador] = useState(1);
    const [todos, setTodos] = useState<ToDo[]>([]);
    const [inputText, setInputText] = useState("");

    const handleAddTodo = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputText.trim()) {
            setTodos([...todos, { id: contador, text: inputText }]);
            setInputText("");
            setContador(contador + 1);
        }
    };

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>

            <form onSubmit={handleAddTodo} className="todo-form">
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Nueva tarea..."
                />
                <button type="submit">Añadir</button>
            </form>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button
                            onClick={() => handleDelete(todo.id)}
                            className="delete-btn"
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
