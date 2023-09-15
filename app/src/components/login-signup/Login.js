import React from "react";
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import './login.css'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from "../../validation/validation";
const Login = () => {
 
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const [action, setAction] = useState("Sign In")
  const handleaction1 = () => {
    setAction("Sign In")
  }
  const handleaction2 = () => {
    setAction("Log In")
  }

  const onSubmit = (data) => {
    console.log(data)
  }
  console.log(errors, "qwertyu")
  return (

    <div className={action === "Log In" ? "main mainheight" : "main"}>
      <h1>{action}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {action === "Log In" ? <div></div> : <div className="inputdivs">
          <input type="text" {...register("firstName", { required: true })} placeholder="Enter first name" />
          {<p>{errors.firstName?.message}</p>}
        </div>
        }
        {action === "Log In" ? <div></div> : <div className="inputdivs">
          <input type='text' {...register("lastName", { required: true })} placeholder="Enter lastname" />
          {<p>{errors.lastName?.message} </p>}
        </div>}

        <div className="inputdivs">
          <input type="text" {...register("email", { required: true })} placeholder="Enter email" />
          {<p>{errors.email?.message}</p>}
        </div>
        <div className="inputdivs">
          <input type="password" {...register("password", { required: true })} placeholder="Enter password" />
          { <p>{errors.password?.message}</p>}
        </div>
        <input className={action === "Sign In" ? "signin  buttonmargin" : "login buttonmargin"} type="Submit" value="Sign in" onClick={handleaction1} />
        <input className={action === "Log In" ? "signin" : "login"} type="button" value="Log in" onClick={handleaction2} />
        {action === "Sign In" ? <div></div> : <div className="fpassword"><a>Forget Password?</a></div>}
      </form>
    </div>

  )
}
export default Login