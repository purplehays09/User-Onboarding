import React from 'react'



export default function Form(props){
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
      } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onCheckboxChange = evt => {
        const { checked } = evt.target
        checkboxChange(checked)
      }
    
      const onInputChange = evt => {
        //   debugger
        const { name, value } = evt.target
        inputChange(name, value)
      }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Friend</h2>
        
                <button id='sumbit' disabled={disabled}>submit</button>
        
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>


            <label>Name     
                <input 
                name='name'
                type='text'
                maxLength='20'
                value={values.name}
                onChange={onInputChange}
                placeholder='enter your First name'

                />
            </label>


            <label>Email         
                <input 
                name='email'
                type='email'
                maxLength='30'
                value={values.email}
                onChange={onInputChange}
                placeholder='enter your email'

                />
            </label>

            <label>Password         
                <input 
                name='password'
                type='password'
                maxLength='30'
                value={values.password}
                onChange={onInputChange}
                placeholder='enter your password'

                />
            </label>

            <label>Do you agree to the terms and services         
                <input 
                name='terms'
                type='checkbox'
                // maxLength='20'
                // value='email'
                // placeholder='enter your email'
                checked={values.terms}
                onChange={onCheckboxChange}

                />
            </label>
        </form>
    )
        
}
