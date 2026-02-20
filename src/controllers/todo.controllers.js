import { getAllTodosServices, createTodoServices, toggleTodoByIdServices, deleteTodoByIdServices, getTaskByIdServices } from "../services/todo.service.js";
// let nextId = 3;

// var todos = [
//     { id: 1, task: "Buy eggs", done: false },
//     { id: 2, task: "Buy Milk", done: false }
// ];

 export async function listTodos(req, res) {
    const todos = await getAllTodosServices();
    console.log(todos);
    res.json({"message":"hello", count: todos.length, todos });
}

export async function createTodos(req, res) {
    try {
    const { task } = req.body;
    const todo = await createTodoServices(task);
    res.status(201).json({message: "created", todo})
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

export async function toggleTodo(req, res) {
    const id = Number(req.params.id);
    const todo = await toggleTodoByIdServices(id);

    if(!todo){
        return res.status(400).json({message: "Not Found"})
    }
    res.json({message: "Toggled", todo});
}

export function getTask(req, res) {
    const id = Number(req.params.id);
    const todo = getTaskById(id);
    if (todo) {
        return res.json({ todo});
    }
    res.status(404).json({ message: "Error Not Found" });
}

export async function deleteTask(req, res) {
    const id = Number(req.params.id);
    const todo = await deleteTodoByIdServices(id);
    if (todo) {
        return res.json({ message: "Deleted Successfully" });
    }
    res.status(404).json({ message: "Error Not Found" });
}