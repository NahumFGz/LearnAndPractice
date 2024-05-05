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
    refreshTasks()
    navigate('/tasks')
  })

  return (
    <div className='border rounded-lg border-white p-4 m-4 w-[500px] h-[300px] flex flex-col justify-center'>
      <form onSubmit={handleFormSubmit}>
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
            className='w-36 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
            type='submit'
            value='Insert Task'
          />
        </div>
      </form>
    </div>
  )
}
