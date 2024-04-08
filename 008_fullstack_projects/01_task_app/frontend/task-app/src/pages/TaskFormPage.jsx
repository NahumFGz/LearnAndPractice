import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'

export function TaskFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()
    console.log('params: ', params)

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            console.log('data a actualizar:', data)
            await updateTask(params.id, data)
        } else {
            const response = await createTask(data)
            console.log('response: ', response)
        }

        //Una vez se termine de crear se debe navegar al listado de tasks
        navigate('/tasks')
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                console.log('obteniendo datos')
                const res = await getTask(params.id)
                console.log('res_get_id: ', res)
                setValue('title', res.data.title)
                setValue('description', res.data.description)

                /*
                //! Otra manera 
                const { data } = await getTask(params.id)
                setValue('title', data.title)
                setValue('description', data.description)

                //! Otra manera
                const { title,  description} = await getTask(params.id)
                setValue('title', title)
                setValue('description', description)
                */
            }
        }
        loadTask()
    }, [])

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

            {params.id && <button onClick={async () => {
                const accepted = window.confirm('are you sure?')
                if (accepted) {
                    await deleteTask(params.id)
                    navigate('/tasks')
                }
            }}>Delete</button>}
        </div>
    )
}
