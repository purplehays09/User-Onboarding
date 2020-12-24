// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address'),
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name must be at least 3 characters long'),  
  password: yup
    .string()
    .min(8, 'Your password must be at least 8 characters')
    .required('Your password must be at least 8 characters'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the terms to proceed')
    .required('You must accept the terms to proceed')
})

export default formSchema
