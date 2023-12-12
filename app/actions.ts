import axios from "axios";

export interface TodoType{
    _id?: string;
    title: string;
    completed: boolean;
}

export const getTodosFromServer = async (completed?: boolean) => {
    const url = completed !== undefined
      ? `http://localhost:8080/todos?completed=${completed}`
      : 'http://localhost:8080/todos';
    const response = await axios.get<TodoType[]>(url);
    return response.data;
  };

export const addTodoToServer = async(title: string)=>{
    const response = await axios.post("http://localhost:8080/todos", { title });
    return response.data;
}

export const deleteTodoFromServer = async(id: string)=>{
    const response = await axios.delete<TodoType>(`http://localhost:8080/todos/${id}`);
    return response.data;
}

export const updateTodoOnServer = async(todo: TodoType)=>{
    const response = await axios.put<TodoType>(`http://localhost:8080/todos/${todo._id}`, todo);
    return response.data;
}

export const deleteCompletedFromServer = async ()=>{
    const response = await axios.delete<TodoType[]>(`http://localhost:8080/todos/completed`);
    return response.data;
}