import * as yup from 'yup'
const nameval=/^[A-Za-z]{3,15}$/
const passwordval=/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,16}$/



const schema = yup.object({
    firstName: yup.string().required('Firstname is required').matches(nameval, 'Starts with capital letter with limit 15'),
    lastName: yup.string().required("Lastname is required").matches(nameval,'Starts with capital letter with limit 15'),
    email: yup.string().required('Email is required').email(),
    password: yup.string().required('Password is required').matches(passwordval,"Password must contain number and a special character")
  })
  export default schema