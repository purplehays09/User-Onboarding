import React, { useState, useEffect } from 'react'
import axios from "axios";
import './App.css';
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import Form from './form'




const initialFormValues = {
  name: '',
  email:'',
  password: '',
  terms: false,

}
const initialFormErrors = {
  name: '',
  email:'',
  password: '',
  terms: false
}

const initialFriends = []
const initialDisabled = true


function App() {

  const [friends, setFriends] = useState(initialFriends)         
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)       


  const postForm = newFriend => {

    axios.post('https://reqres.in/api/users', newFriend)
      .then(res => {
        setFriends(friends.concat(res.data))
        console.log(res.data)
      })
      .catch(err => {
        debugger
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
    });

    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const checkboxChange = (name, isChecked) => {

    setFormValues({
      ...formValues,
      terms: !formValues.terms
    })
  }

  const submit = () => {
    const filledForm = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms: formValues.terms.accepted,
    }
  
    postForm(filledForm)
  }


  useEffect(() => {
      formSchema.isValid(formValues)
        .then(valid => {
          setDisabled(!valid)
        })
    }, [formValues])

  //-----------------------------------------------------------

  return (
    <div className="App">
      <Form 
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      
    
    </div>
  );
}

export default App;
