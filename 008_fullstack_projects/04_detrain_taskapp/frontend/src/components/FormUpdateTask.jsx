import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteTask, getTask, updateTask } from '../api/tasks'

export function FormUpdateTask () {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  const handleUpdateTask = handleSubmit(async (data) => {
    await updateTask(params.id, data)
    console.log('Task updated')
    navigate('/tasks')
  })

  const handleDeleteTask = handleSubmit(async (data) => {
    const confirm = window.confirm('Are you sure you want to delete this task?')
    if (!confirm) return

    await deleteTask(params.id)
    console.log('Task deleted')
    navigate('/tasks')
  })

  useEffect(() => {
    const fetchTask = async () => {
      const response = await getTask(params.id)
      console.log('Task fetched', response)
      setValue('title', response.title)
      setValue('description', response.description)
      setValue('completed', response.completed)
      setValue('created', response.created_at)
      setValue('updated', response.updated_at)
    }

    fetchTask()
  })

  return (
    <div className='border border-white p-4 m-4 w-[500px] h-[300px] flex flex-col justify-center'>
      <form>
        <div className='flex flex-col gap-2'>
          <input
            type='text'
            placeholder='Title'
            {...register('title', { required: true })}
          />
          {errors.title && (<span className='text-sm text-red-500'>Title is required</span>)}

          <textarea
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
            type='text'
            readOnly
            {...register('created')}
          />

          <input
            type='text'
            readOnly
            {...register('updated')}
          />

          <button
            className='text-white border rounded-sm'
            type='button'
            onClick={handleUpdateTask}
          >
            Update
          </button>

          <button
            className='text-white border rounded-sm'
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
