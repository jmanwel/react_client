import axios from "axios";

//const url = "https://mern-jmg-todo-987e185d8a59.herokuapp.com/todos";
const url = ${ENDPOINT};

export const readTodos = ()=> axios.get(url);
export const createTodo = newTodo => axios.post(url, newTodo);

export const updateTodo = (id, updatedTodo)=> axios.patch(`${url}/${id}`, updatedTodo);

export const deleteTodo = (id)=> axios.delete(`${url}/${id}`);
