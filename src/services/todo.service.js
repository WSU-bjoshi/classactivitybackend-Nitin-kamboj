// WILL NOT RETURN THE HTTP CALLS OR RESPONSES

import pool from "../db/connection.js";

// import ToDoModel from "../models/todo.modles.js"
import { getAllTodos, createTodo, toggleTodoById, deleteTodoById, getTaskById } from "../models/todo.modles.js";


async function getAllTodosServices() {
    return await getAllTodos();
}

async function createTodoServices(task) {
    if (!task || typeof task !== "string" || task.trim() === "") {
        // return res.status(400).json({ error: "Task is required" })
        throw new error("Invalid");
    }
    return await createTodo(task);
}

async function toggleTodoByIdServices(id) {
    // const todo = todos.find(t => t.id === id);

    // if (!todo) return null;

    const result = await toggleTodoById(id);
    if (!result) {
        throw new Error("Todo not found");
    }
    return result;
}

async function deleteTodoByIdServices(id) {
    // const todoIndex = todos.findIndex(t => t.id === id);

    // if (todoIndex === -1) {
    //     return null;
    // }
    const rowsDeleted = await deleteTodoById(id);
    if (rowsDeleted === 0) {
        throw new Error("Todo not found");
    }
    return { success: true };
}

async function getTaskByIdServices(id) {

    const todo = await toggleTodoById(id); // Re-using find logic or create a findById in model
    return todo ? todo.task : null;
}

export {
    getAllTodosServices,
    createTodoServices,
    toggleTodoByIdServices,
    deleteTodoByIdServices,
    getTaskByIdServices
}