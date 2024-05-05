import { useForm } from 'react-hook-form'
import { createTask } from '../api/tasks'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { TaskContext } from '../context/task'

export function FormInsertTask () {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const { refreshTasks } = useContext(TaskContext)

  const handleFormSubmit = handleSubmit(async (data) => {
    await createTask(data)
    console.log('Task created')
    navigate('/tasks')
    refreshTasks()
  })

  return (
    <div className='border border-white p-4 m-4 w-[500px] h-[200px] flex flex-col justify-center'>
      <form onSubmit={handleFormSubmit}>
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
            className='text-white border rounded-sm'
            type='submit'
            value='Insert Task'
          />
        </div>
      </form>
    </div>
  )
}
