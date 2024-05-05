import { useParams } from 'react-router-dom'
import { FormInsertTask } from '../components/FormInsertTask'
import { FormUpdateTask } from '../components/FormUpdateTask'

export function TasksFormPage () {
  const params = useParams()
  const isInEditMode = Boolean(params.id)

  return (
    <div className='flex flex-col items-start justify-center'>
      {
        isInEditMode
          ? <FormUpdateTask />
          : <FormInsertTask />
      }
    </div>
  )
}
