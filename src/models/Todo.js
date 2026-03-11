import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

const Todo = sequelize.define(
    "Todo",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        task: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        },

    },
    {
        tableName: "todos",
        tinestamps: "false",
    }
)

export default Todo;