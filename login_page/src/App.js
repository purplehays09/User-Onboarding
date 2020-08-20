import React, { useState, useEffect } from 'react'
import './App.css';



const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: '',

}
const initialFormErrors = {
  username: '',
  email: '',
  role: '',
  civil: '',
}


function App() {

  const [friends, setFriends] = useState('initialFriends')          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState('initialDisabled')       // boolean


  const postForm = newFriend => {

    axios.post('http://localhost:4000/friends', newFriend)
      .then(res => {
        setFriends(friends.concat(res.data))
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  return (
    <div className="App" style='display=flex '>
      

      <label>First Name     
        <input 
          name='name'
          type='text'
          maxLength='20'
          // value='name'
          placeholder='enter your First name'

        />
      </label>

      <label>Last Name     
        <input 
          name='name'
          type='text'
          maxLength='20'
          // value='name'
          placeholder='enter your Last name'

        />
      </label>


      <label>Email         
        <input 
          name='email'
          type='email'
          maxLength='30'
          // value='email'
          placeholder='enter your email'

        />
      </label>

      <label>Password         
        <input 
          name='password'
          type='password'
          maxLength='30'
          // value='email'
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

        />
      </label>
    
    </div>
  );
}

export default App;
