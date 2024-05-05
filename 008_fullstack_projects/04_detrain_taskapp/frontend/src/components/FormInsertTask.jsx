import { useForm } from 'react-hook-form'

export function FormInsertTask () {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data)
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

          <button className='text-white border rounded-sm'>
            Insert Task
          </button>
        </div>
      </form>
    </div>
  )
}
