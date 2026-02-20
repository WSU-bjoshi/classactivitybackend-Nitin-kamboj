import pool from "../db/connection.js";
let nextId = 3;

var todos = [
    { id: 1, task: "Buy eggs", done: false },
    { id: 2, task: "Buy Milk", done: false }
];

export function getAllTodos() {
    return todos;
}

export async function createTodo(task) {
    const [result] = await pool.query(
        "INSERT INTO todos (task) VALUES (?)",
        [task]
    );

    return {
        id: result.insertId,
        task,
        completed: 0
    };
}


export async function toggleTodoById(id) {
    // const todo = todos.find(t => t.id === id);

    // if (!todo) return null;
    const [result] = await pool.query("SELECT task FROM todos WHERE id = ?", [id])
    // todo.done = !todo.done;
    // res.json({ message: "Toggle", todo });
}

export async function deleteTodoById(id) {
    const [result] = await pool.query(
        "DELETE FROM todos WHERE id = ?",
        [id]
    );

    return result;
}


export function getTaskById(task) {

    // const todo = todos.find(t => t.id === id);
    // if (todo) {
    // const task = todo.task;
    return task;
    // }
    // else {
    //     return null;
    // }
}