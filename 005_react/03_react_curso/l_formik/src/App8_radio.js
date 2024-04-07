//! componente customSelect

import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Select from './components/Select'
import Radio from './components/Radio'

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = 'Requerido'
  } else if (values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }
  
  if(!values.lastname) {
    errors.lastname = 'Requerido'
  } else if (values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto'
  }
  
  return errors
}


function App() {
  
  return (
    <Formik
      initialValues={{name:'', lastname:'', email:''}}
      validate={validate}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='Nombre'/>
        <br/>
        <TextInput name='lastname' label='Apellido'/>
        <br/>
        <TextInput name='email' label='Correo'/>
        <br/>
        <Select label='Tipo de chancho' name='chancho'>
          <option value=''>Seleccione chancho</option>
          <option value='felipe'>Felipe</option>
          <option value='chanchofeliz'>Chanchito Feliz</option>
          <option value='chanchotriste'>Chanchito Triste</option>
        </Select>
        <Checkbox name='accept'>Aceptar TT&CC</Checkbox>
        <Radio name='radio' value='chanchito 1' label='chanchito 1'/>
        <Radio name='radio' value='chanchito 2' label='chanchito 2'/>
        <Radio name='radio' value='chanchito 3' label='chanchito 3'/>
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
}

export default App;
