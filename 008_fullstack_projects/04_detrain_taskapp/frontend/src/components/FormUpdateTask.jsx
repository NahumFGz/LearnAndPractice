import { useForm } from 'react-hook-form'
import { createTask } from '../api/tasks'

export function FormUpdateTask () {
  const { register, handleSubmit } = useForm()

  const handleFormSubmit = handleSubmit(async (data) => {
    await createTask(data)
    console.log('Task created')
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

          <textarea
            type='text'
            placeholder='Description'
            {...register('description', { required: true })}
          />

          <button className='text-white border rounded-sm'>
            Insert Task
          </button>
        </div>

      </form>
    </div>
  )
}
