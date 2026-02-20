import express from "express";
import { Router } from "express";
import { listTodos, createTodos, toggleTodo, getTask, deleteTask } from "../controllers/todo.controllers.js"

const router = Router();

router.get("/", listTodos);
router.post("/", createTodos);
router.patch("/:id", toggleTodo);
router.get("/:id/getTask", getTask);
router.delete("/delete/:id", deleteTask);

export default router;