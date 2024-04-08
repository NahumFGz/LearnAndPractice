import { useForm } from 'react-hook-form'
import { createTask } from '../api/tasks.api'
import { useNavigate } from 'react-router-dom'

export function TaskFormPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigate = useNavigate()

    const onSubmit = handleSubmit(async data => {
        console.log(data)
        const response = await createTask(data)
        console.log('response: ', response)

        //Una vez se termine de crear se debe navegar al listado de tasks
        navigate('/tasks')
    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title"
                    {...register("title", { required: true })}
                />
                {errors.title && <span>this field is required</span>}

                <textarea rows="3" placeholder="description"
                    {...register("description", { required: true })}
                />
                {errors.description && <span>this field is required</span>}
                <button>Save</button>
            </form>
        </div>
    )
}
