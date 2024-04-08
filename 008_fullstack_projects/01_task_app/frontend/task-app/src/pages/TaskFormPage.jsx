import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from '../api/tasks.api'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TaskFormPage() {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm()

    const navigate = useNavigate()
    const params = useParams()
    console.log('params: ', params)

    const onSubmit = handleSubmit(async data => {
        if (params.id) {
            console.log('data a actualizar:', data)
            await updateTask(params.id, data)
            toast.success('Tarea Actualizada')
        } else {
            const response = await createTask(data)
            console.log('response: ', response)
            toast.success('Tarea creada', {
                position: "bottom-right",
                style: {
                    background: "#101010",
                    color: "#fff"
                }
            })
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
        <div className='max-w-xl mx-auto'>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    {...register("title", { required: true })}
                />
                {errors.title && <span>this field is required</span>}

                <textarea rows="3" placeholder="description" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                    {...register("description", { required: true })}
                />
                {errors.description && <span>this field is required</span>}
                <button className='bg-indigo-500 p-3 rounded-lg block w-full mt-3'>
                    Save
                </button>
            </form>

            {
                params.id &&
                <div className='flex justify-end'>
                    <button className='bg-red-500 p-3 rounded-lg w-48 mt-3'
                        onClick={async () => {
                            const accepted = window.confirm('are you sure?')
                            if (accepted) {
                                await deleteTask(params.id)
                                toast.success('Tarea eliminada')
                                navigate('/tasks')
                            }
                        }}>Delete
                    </button>
                </div>
            }
        </div>
    )
}
