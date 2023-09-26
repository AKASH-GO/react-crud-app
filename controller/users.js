import {v4 as uuid} from "uuid";

let users = [];
export const getUsers = (req,res) => {
    res.send(users)
};

export const createUsers = (req,res) => {
    const user = req.body;
    users.push({...user, id: uuid()});
    res.send("User added succesfully"); 
}
export const getUser = (req,res) => {
    const singleUser = users.filter((user) => user.id = req.params.id)
    res.send(singleUser);
}