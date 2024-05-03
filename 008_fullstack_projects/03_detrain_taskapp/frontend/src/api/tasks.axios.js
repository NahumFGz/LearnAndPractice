import axios from 'axios'

const taskApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/taskapp/api/v1/tasks/'
})

export const getAllTasks = () => taskApi.get('/')
