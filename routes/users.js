 import express from "express";
 import {getUsers, createUsers, getUser} from "../controller/users.js"

 const router = express.Router();
 router.get("/users", getUsers);
 router.post("/user", createUsers);
 router.post("/user/:id", getUser);

 export default router;