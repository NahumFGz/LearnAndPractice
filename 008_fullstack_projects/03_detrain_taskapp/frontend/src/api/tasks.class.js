const BASE_URL = 'http://127.0.0.1:8000/taskapp/api/v1/tasks/'

class TaskManager {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  async getAllTasks () {
    const response = await fetch(this.baseUrl)
    const data = await response.json()
    return data
  }

  async getTaskById (taskId) {
    const response = await fetch(`${this.baseUrl}/${taskId}`)
    const data = await response.json()
    return data
  }

  async createTask (taskData) {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    })
    const data = await response.json()
    return data
  }

  async updateTask (taskId, updatedTaskData) {
    const response = await fetch(`${this.baseUrl}/${taskId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTaskData)
    })
    const data = await response.json()
    return data
  }

  async deleteTask (taskId) {
    const response = await fetch(`${this.baseUrl}/${taskId}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    return data
  }
}

const taskManager = new TaskManager(BASE_URL)

export default taskManager
