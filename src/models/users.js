import { DataTypes } from "sequelize";
import { sequelize } from "../db/sequelize.js";

const user = sequelize.define(
    "user",{
        user_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        user_name:{
            type: DataTypes.STRING(255),
            allowNull: true
        },
        user_email:{
            type: DataTypes.STRING(255),
        },
        user_password:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        user_role: {
            type: DataTypes.ENUM("users", "admin", "staff"),
            allowNull: false,
            defaultValue: "users"
        }
    },
    {
        tableName: "tasks",
        timestamps: true,
        indexes: [{unique:true, fields:[]}]
    }
)