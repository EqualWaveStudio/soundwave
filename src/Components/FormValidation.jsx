import React from 'react'
import { useForm } from 'react-hook-form'
import '../Join/MainJoin';
import Swal from 'sweetalert2';

const FormValidation = () => {
  const { register, handleSubmit, formState: {errors} } = useForm() 
 
  const customSubmit = (data) => {
     //console.log(data)
      /*con esta función se que datos se capturan y lo veo en consola*/
      Swal.fire({
        icon: 'success',
        title: "<p>Tanks for joining us!</p>",
        text: 'Check your email and follow the instructions',
        showConfirmButton: false,
        timer: 5000,
        background: '#3E2D40',
        backdrop: true,
        allowEscapeKey: true,
        showCloseButton: true,
        closeButtonAriaLabel: 'Close the window',
        
        });
      
  }
  return (
    <>
        <div className='container'>
        <form onSubmit={ handleSubmit(customSubmit) }>
            <div className='form-control'>
                <label>Name:</label>
                <input type="text" {...register('name', { 
                    required:true, 
                    maxLength: 10  
                })} className='transparent-input' />
                {errors.name && <small>This field is required.</small>}
                {errors.name?.type === 'maxLength' && <small>Only up to 15 characters are allowed</small>}
                </div>
            <div className='form-control'>
                <label>Email:</label>
                 <input type="text"{...register('email', { 
                    required: true, 
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                    })} className='transparent-input' />
                {errors.email && <small>This field is required.</small>}
                {errors.email?.type === 'pattern' && <small>This field is required and must be a valid email address</small>}
               </div>

            <div className='form-control'>
                <label>Password:</label>
                <input type="password" {...register('password', {
                    required: true,
                 })} className='transparent-input' />
                {errors.password && <small>This field is required.</small>}
                </div>
            <button type='submit' className='button'>Join Now</button>
        </form>
        </div>
    </>
  )
}


export default FormValidation