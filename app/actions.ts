import axios from "axios";

export interface TodoType{
    _id?: string;
    title: string;
    completed: boolean;
}

export const getTodosFromServer = async (completed?: boolean) => {
    const url = completed !== undefined
      ? `https://todobackend-rvy6.onrender.com/todos?completed=${completed}`
      : 'https://todobackend-rvy6.onrender.com/todos';
    const response = await axios.get<TodoType[]>(url);
    return response.data;
  };

export const addTodoToServer = async(title: string)=>{
    const response = await axios.post("https://todobackend-rvy6.onrender.com/todos", { title });
    return response.data;
}

export const deleteTodoFromServer = async(id: string)=>{
    const response = await axios.delete<TodoType>(`https://todobackend-rvy6.onrender.com/todos/${id}`);
    return response.data;
}

export const updateTodoOnServer = async(todo: TodoType)=>{
    const response = await axios.put<TodoType>(`https://todobackend-rvy6.onrender.com/todos/${todo._id}`, todo);
    return response.data;
}

export const deleteCompletedFromServer = async ()=>{
    const response = await axios.delete<TodoType[]>(`https://todobackend-rvy6.onrender.com/todos/completed`);
    return response.data;
}