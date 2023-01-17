import React, { useState } from 'react'
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const validate = (inputs) => {
  let errors = {}
  if (inputs.name === '') {
    errors.name = 'Se requiere un nombre';
  } else if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un correo electrónico';
  } else if (inputs.phone <= 0) {
    errors.phone = 'Sólo números positivos';
  } else if (inputs.subject === '') {
    errors.subject = 'Se requiere un asunto';
  } else if (inputs.message === '') {
    errors.message = 'Se requiere un mensaje';
  }
  return errors
}

export default function Contact () {
  const [ inputs, setInputs ] = useState({
    name:'',
    email:'',
    phone: 0,
    subject: '',
    message: ''
  })

  const [ errors, setErrors ] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.subject]: e.target.value,
      [e.target.message]: e.target.value
    })
    setErrors(
      validate({
        ...inputs,
        [e.target.name]: e.target.value,
        [e.target.email]: e.target.value,
        [e.target.phone]: e.target.value,
        [e.target.subject]: e.target.value,
        [e.target.message]: e.target.value      
      })
   );
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(Object.values(errors).length === 0) {
      setInputs({
        ...inputs,
        name:'',
        email:'',
        phone: 0,
        subject: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      return window.alert('Datos completos')
    } else {
      setInputs({
        ...inputs,
        name:'',
        email:'',
        phone: 0,
        subject: '',
        message: ''
      })
      setErrors({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      return window.alert("Debes corregir los errores")
    }
  }

  return(
    <div>
    Crear Formulario
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="name" value={inputs.name} placeholder='Escribe tu nombre...' onChange={handleChange} className={errors.name && 'warning'}/>
        <p className='danger'>{errors.name}</p>
        <label>Correo Electrónico:</label>
        <input type="text" name="email" value={inputs.email} placeholder='Escribe tu email...' onChange={handleChange} className={errors.email && 'warning'}/>
        <p className='danger'>{errors.email}</p>
        <label>Teléfono:</label>
        <input type="number" name="phone" value={inputs.phone} placeholder='Escribe un teléfono...' onChange={handleChange} className={errors.phone && 'warning'}/>
        <p className='danger'>{errors.phone}</p>
        <label>Asunto:</label>
        <input type="text" name="subject" value={inputs.subject} placeholder='Escribe el asunto...' onChange={handleChange} className={errors.subject && 'warning'}/>
        <p className='danger'>{errors.subject}</p>
        <label>Mensaje:</label>
        <textarea type="text" name="message" value={inputs.message} placeholder='Escribe tu mensaje...' onChange={handleChange} className={errors.message && 'warning'}/>
        <p className='danger'>{errors.message}</p>
        <button type='submit' value="submit">Enviar</button>
      </form>
    </div>
  )
}
