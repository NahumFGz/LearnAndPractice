import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export function TasksFormPage () {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const navigate = useNavigate()
  const params = useParams()
  console.log('params -> ', params)

  const handleFormSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data)
      console.log('update task')
    } else {
      await createTask(data)
      console.log('Create task')
    }
    navigate('/tasks')
  })

  useEffect(() => {
    if (params.id) {
      async function loadTask () {
        console.log('load task')
        const response = await getTask(params.id)
        console.log('response -> ', response)
        setValue('title', response.data.title)
        setValue('description', response.data.description)
      }

      loadTask()
    }
  }, [])

  return (
    <div className='border w-96 h-[350px] rounded-md p-2 flex flex-col gap-4 items-center justify-center'>
      <form onSubmit={handleFormSubmit}>
        <div className='flex flex-col gap-4 mt-3'>
          <input
            className='border rounded-md p-2 w-[350px]'
            type='text'
            placeholder='Title'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-sm text-red-500'>Title is required</span>}

          <textarea
            className='border rounded-md p-2 h-24'
            placeholder='Description'
            {...register('description', { required: true })}
          />
          {errors.description && <span className='text-sm text-red-500'>Description is required</span>}

          {
            !params.id && (
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                type='submit'
              >
                Create Task
              </button>
            )
          }
        </div>
      </form>

      {params.id && (
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={async () => {
            const accept = window.confirm('Are you sure you want to delete this task?')
            if (accept) {
              await deleteTask(params.id)
              navigate('/tasks')
            }
          }}
        >
          Delete
        </button>
      )}

      {
            params.id && (
              <button
                className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleFormSubmit}
              >
                Update
              </button>
            )
          }
    </div>
  )
}
