import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteTask, getTask, updateTask } from '../api/tasks'
import { useTasksContext } from '../context/task'

export function FormUpdateTask () {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const navigate = useNavigate()
  const params = useParams()
  const { refreshTasks } = useTasksContext()

  const handleUpdateTask = handleSubmit(async (data) => {
    const newData = { title: data.title, description: data.description, completed: data.completed }
    await updateTask(params.id, newData)
    console.log('Task updated', newData)
    navigate('/tasks')
    refreshTasks()
  })

  const handleDeleteTask = handleSubmit(async () => {
    const confirm = window.confirm('Are you sure you want to delete this task?')
    if (!confirm) return

    await deleteTask(params.id)
    console.log('Task deleted')
    navigate('/tasks')
    refreshTasks()
  })

  useEffect(() => {
    const fetchTask = async () => {
      const response = await getTask(params.id)
      console.log('Task fetched', response)
      setValue('title', response.title)
      setValue('description', response.description)
      setValue('completed', response.completed)
      setValue('created', response.created_at.slice(0, 19).replace('T', ' '))
      setValue('updated', response.updated_at.slice(0, 19).replace('T', ' '))
    }

    fetchTask()
  })

  return (
    <div className='border rounded-lg border-white p-4 m-4 w-[500px] h-[400px] flex flex-col justify-center'>
      <form>
        <div className='flex flex-col justify-center items-center gap-2'>
          <input
            className='border rounded-md p-2 w-[350px]'
            type='text'
            placeholder='Title'
            {...register('title', { required: true })}
          />
          {errors.title && (<span className='text-sm text-red-500'>Title is required</span>)}

          <textarea
            className='border rounded-md p-2 w-[350px]'
            type='text'
            placeholder='Description'
            {...register('description', { required: true })}
          />
          {errors.title && (<span className='text-sm text-red-500'>Description is required</span>)}

          <input
            type='checkbox'
            {...register('completed')}
          />

          <input
            className='bg-gray-400 border rounded-md p-2 w-[350px]'
            type='text'
            readOnly
            {...register('created')}
          />

          <input
            className='bg-gray-400 border rounded-md p-2 w-[350px]'
            type='text'
            readOnly
            {...register('updated')}
          />

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='button'
            onClick={handleUpdateTask}
          >
            Update
          </button>

          <button
            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            type='button'
            onClick={handleDeleteTask}
          >
            Delete
          </button>
        </div>

      </form>
    </div>
  )
}
