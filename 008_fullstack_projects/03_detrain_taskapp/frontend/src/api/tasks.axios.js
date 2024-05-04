import axios from 'axios'

const taskApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/taskapp/api/v1/tasks/'
})

export const getAllTasks = () => taskApi.get('/')

export const getTask = (id) => taskApi.get(`/${id}/`)

export const createTask = (task) => taskApi.post('/', task)

export const deleteTask = (id) => taskApi.delete(`/${id}/`)

export const updateTask = (id, task) => taskApi.put(`/${id}/`, task)
