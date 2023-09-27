 import express from "express";
 import {getUsers, createUsers, getUser, deleteUser, updateUser } from "../controller/users.js"

 const router = express.Router();
 router.get("/users", getUsers);
 router.post("/user", createUsers);
 router.get("/user/:id", getUser);
 router.delete("/user/:id", deleteUser);
 router.put("/user/:id", updateUser);

 export default router;