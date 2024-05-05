const BASE_URL = 'http://127.0.0.1:8000/tasksapi/api/v1/tasks/'

export const getAllTasks = async () => {
  const response = await fetch(BASE_URL)
  const data = await response.json()
  return data
}

export const getTask = async (id) => {
  const response = await fetch(`${BASE_URL}${id}/`)
  const data = await response.json()
  return data
}

export const createTask = async (task) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await response.json()
  return data
}

export const updateTask = async (id, task) => {
  const response = await fetch(`${BASE_URL}${id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(task)
  })

  const data = await response.json()
  return data
}

export const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}${id}/`, {
    method: 'DELETE'
  })

  // Verifica si la respuesta tiene contenido antes de llamar a .json()
  if (response.ok && response.status !== 204) {
    const data = await response.json()
    return data
  } else if (response.ok) {
    return { message: 'Task deleted successfully' }
  } else {
    throw new Error('Failed to delete the task')
  }
}
