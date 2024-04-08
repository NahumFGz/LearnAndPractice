import { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TaskFormPage() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm()
    const navigate = useNavigate()
    const params = useParams()
    console.log('params:', params)

    const onSubmit = handleSubmit(async (data) => {
        console.log('data_handleSubmit:', data)
        if (params.id) {
            console.log('data a actualizar', data)
            await updateTask(params.id, data)
            toast.success('Tarea Actualizada')
        } else {
            const response = await createTask(data)
            console.log('response POST', response)
            toast.success('Tarea Creada')
        }

        navigate('/tasks')
    })

    useEffect( () => {
        async function loadTask() {
            if(params.id) {
                console.log('Obteniendo datos de la tarea')
                const res = await getTask(params.id)
                console.log('responde_getTask:', res)
                setValue('title', res.data.title)
                setValue('description', res.data.description)
            }
        }

        loadTask()
    }, [])

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title" {...register('title', { required: true })}></input>
                {errors.title && <span>This field is requiered</span>}

                <textarea rows="3" placeholder="description" {...register('description', { required: true })}></textarea>
                {errors.description && <span>This field is requiered</span>}

                <button> save </button>
            </form>

            {
                params.id && 
                <div>
                    <button
                        onClick={async () => {
                            const accepted = window.confirm('are you sure?')
                            if (accepted){
                                await deleteTask(params.id)
                                toast.success('Tarea eliminada')
                                navigate('/tasks')
                            }
                        }}
                    >
                        Delete
                    </button>
                </div>
            }
        </div>

    )
}