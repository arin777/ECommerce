import express from "express";
import { newUser } from "../controllers/user";

const app = express.Router()  
//route
app.post("/new",newUser)
export default app;