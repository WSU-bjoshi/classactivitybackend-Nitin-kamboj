// import express from "express";
// import todoRoutes from "./routes/todo.routes.js";
// import errorHandler from "./middleware/error.js"
// import logger from "./middleware/logger.js"

// const app = express();
// app.use(express.json());
// const port = 3000;

// app.get("/", (req, res)=>{
//     res.send("Hello World!")
// })

// app.use("/api/todos", todoRoutes);

// //not found
// app.use((req, res)=>{
//     res.status(404).json({error: "Not Found" ,path:req.originalUrl});
// })

// app.use(errorHandler);

// app.listen(port, ()=>{
//     console.log(`App listening on port ${port}`);
// })
import { createApp } from "./app.js";
import { env } from "./config/env.js";

const app = createApp();

app.listen(env.PORT, ()=>{
    console.log(`SERVER RUNNING ON ${env.PORT}`)
})