// rfc -> React function component
import React from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
  let {register, handleSubmit, formState} = useForm()

  function collectFormData(formData){
    console.log(formData);
    
  }
  return (
    <div classNameName='d-flex justify-content-center mt-3'>
      <form classNameName='w-50 border border-3 rounded p-3' onSubmit={handleSubmit(collectFormData)}>
        <div classNameName='mb-3'>
          <label for="username" classNameName='form-label'>Username:</label>
          <input type="text" classNameName='form-control' id="username" 
          {...register('username',{required:true, minLength:3, maxLength:10})}/>
          <div className="form-text text-danger">
            {formState.errors.username && formState.errors.username.type=='required' && "username is required"}
            {formState.errors.username && formState.errors.username.type=='minLength' && "min 3 characters required"}
            {formState.errors.username && formState.errors.username.type=='maxLength' && "max 10 characters allowed"}
          </div>
        </div>
        <div classNameName='mb-3'>
          <label for="userage" classNameName='form-label'>userAge:</label>
          <input type="number" classNameName='form-control' id="userage" 
          {...register('userage',{required:true, min:18, max:30})}/>
          <div className="form-text text-danger">
            {formState.errors.userage && formState.errors.userage.type=='required' && "userage is required"}
            {formState.errors.userage && formState.errors.userage.type=='min' && "min age is 18"}
            {formState.errors.userage && formState.errors.userage.type=='max' && "max age required is 30"}
          </div>
        </div>

        <div classNameName='mb-3'>
          <label for="password1" classNameName='form-label'>Password</label>
          <input type="password" classNameName='form-control' id="password1" />
        </div>
         <div classNameName='mb-3'>
          <label for="password2" classNameName='form-label'>Confirm Password</label>
          <input type="password" classNameName='form-control' id="password2" />
        </div>
        <button type="submit" classNameName='btn btn-primary w-100'>Submit</button>
      </form>
    </div>
  )
}
