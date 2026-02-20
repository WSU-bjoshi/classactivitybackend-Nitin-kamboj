// WILL NOT RETURN THE HTTP CALLS OR RESPONSES

import pool from "../db/connection.js";

// import ToDoModel from "../models/todo.modles.js"
import { getAllTodos, createTodo, toggleTodoById, deleteTodoById, getTaskById } from "../models/todo.modles.js";

var todos = [
    { id: 1, task: "Buy eggs", done: false },
    { id: 2, task: "Buy Milk", done: false }
];
async function getAllTodosServices() {
    return await pool.query("SELECT * FROM todos");
}

function createTodoServices(task) {
    if (!task || typeof task !== "string" || task.trim() === "") {
        // return res.status(400).json({ error: "Task is required" })
        throw new error("Invalid");
    }
    return createTodo(task);
}

async function toggleTodoByIdServices(id) {
    // const todo = todos.find(t => t.id === id);

    // if (!todo) return null;

    return await toggleTodoById(id);
}

async function deleteTodoByIdServices(id) {
    // const todoIndex = todos.findIndex(t => t.id === id);

    // if (todoIndex === -1) {
    //     return null;
    // }

    return await deleteTodoById(id);
}

function getTaskByIdServices(id) {

    const todo = todos.find(t => t.id === id);
    if (todo) {
        const task = todo.task;
        return getTaskById(task);
    }
    // else {
    //     return null;
    // }
}

export {
    getAllTodosServices,
    createTodoServices,
    toggleTodoByIdServices,
    deleteTodoByIdServices,
    getTaskByIdServices
}