import * as api from "../api";

export const readTodos = async ()=>{
    try{
        const {data} = await api.readTodos();
        return data;
    }
    catch(e) {console.log(e)};
}


export const createTodo = async (todo)=>{
    try{
        const {data} = await api.createTodo(todo);
        return data;
    }
    catch(e) {console.log(e)};
}

export const updateTodo = async (id, todo)=>{
    try{
        const {data} = await api.updateTodo(id, todo);
        return data;
    }
    catch(e) {console.log(e)};
}

export const deleteTodo = async (id)=>{
    try{
        await api.deleteTodo(id);
    }
    catch(e) {console.log(e)};
}