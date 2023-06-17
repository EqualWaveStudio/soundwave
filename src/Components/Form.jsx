import React from 'react'
import { useForm } from 'react-hook-form'
import '../Join/MainJoin';

const Form = () => {
  const { register, handleSubmit } = useForm() 
  const customSubmit = (data) => {
      console.log(data)
  }
  return (
    <>
        <div className='container'>
        <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
            <div className='form-control'>
                <label>Name:</label>
                <input type="text" {...register('name')} className='transparent-input' />
            </div>
            <div className='form-control'>
                <label>Email:</label>
                <input type="text" {...register('email')} className='transparent-input' />
            </div>
            <div className='form-password'>
                <label>Password:</label>
                <input type="text" {...register('password')} className='transparent-input' />
            </div>
            <button type='submit' className='button'>Join Now</button>
        </form>
        </div>
    </>
  )
}

export default Form