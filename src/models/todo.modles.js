import pool from "../db/connection.js";
import Todo from "./Todo.js";


export async function getAllTodos() {
    return await Todo.findAll({ order: [["id", "ASC"]] });
}

export async function createTodo(task) {
    // const [result] = await pool.query(
    //     "INSERT INTO todos (task) VALUES (?)",
    //     [task]
    // );
    // Todo.create
    const newTodo = await Todo.create({
        task: task
    });
    return newTodo;
}


export async function toggleTodoById(id) {
    // const [result] = await pool.query("SELECT task FROM todos WHERE id = ?", [id])
    const todo = await Todo.findByPk(id);

    if (todo) {
        todo.completed = !todo.completed;
        await todo.save();
    }

    return todo;
}

export async function deleteTodoById(id) {
    // const [result] = await pool.query(
    //     "DELETE FROM todos WHERE id = ?",
    //     [id]
    // );
    const result = await Todo.destroy({
        where: { id: id }
    });
    return result;
}

export async function getTaskById(task) {
    return await Todo.findByPk(id);
}