import { useForm } from 'react-hook-form'

export function TasksFormPage () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleFormSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <div className='border w-96 h-[350px] rounded-md p-2 flex items-center justify-center'>
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

          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            type='submit'
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}
