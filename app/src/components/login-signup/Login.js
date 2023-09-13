import React from "react";
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import './login.css'
const Login=()=>{
  const{register,handleSubmit,formState:{errors}}=useForm()
  const[action,setAction]=useState("Sign In")
  const handleaction1=()=>{
    setAction("Sign In")
  }
  const handleaction2=()=>{
    setAction("Log In")
  }
   
  const onSubmit=(data)=>{
    console.log(data)
  }
    return(
    
       <div className="main">
            <h1>{action}</h1> 
        <form onSubmit={handleSubmit(onSubmit)}>
          {action==="Log In"?<div></div>:<div className="inputdivs">
          <input type="text" {... register("firstName",{required:true})} placeholder="enter first name"/>
          {errors.firstName && <p>First name is required</p>}
          </div>
          }
          {action==="Log In"?<div></div>:<div className="inputdivs">
          <input type='text' {...register("lastName",{required:true})} placeholder="enter lastname"/>
          {errors.lastName && <p>lastname is required</p>}
          </div>}
          
          <div className="inputdivs">
          <input type="text" {...register("email",{required:true})} placeholder="enter email"/>
          {errors.email && <p>Email is required</p>}
          </div>
          <div className="inputdivs">
          <input type="password" {...register("password",{required:true})} placeholder="enter password"/>
            {errors.password && <p>Password is required</p>}
            </div>
            <input className={action==="Sign In"?"signin":"login"} type="Submit" value="Sign in" onClick={handleaction1}/>
            <input className={action==="Log In"?"signin logmar":"login logmar"} type="button" value="Log in" onClick={handleaction2}/>
            {action==="Sign In"?<div></div>:<div className="fpassword"><a>Forget Password?</a></div>}
        </form>
       </div>
       
    )
}
export default Login