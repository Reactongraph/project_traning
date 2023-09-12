import logo from './logo.svg';
import './App.css';
import {useForm} from 'react-hook-form'


    function App() {
      const{register,handleSubmit,formState:{errors}}=useForm()
      const onSubmit=(data)=>{
        console.log(data)
      }
      return (
        <div className="App">
           <h1>Enter your Details</h1> 
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" {... register("firstName",{required:true})} placeholder="enter first name"/>
          {errors.firstName && <p>First name is required</p>}<br/>
          <input type='text' {...register("lastName",{required:true})} placeholder="enter lastname"/>
          {errors.lastName && <p>lastname is required</p>}<br/>
          <input type="text" {...register("email",{required:true})} placeholder="enter email"/>
          {errors.email && <p>Email is required</p>}<br/>
          <input type="password" {...register("password",{required:true})} placeholder="enter password"/>
            {errors.password && <p>Password is required</p>}<br/>
            <input type="Submit" value="Submit"/>
        </form>
        </div>
      );
    }
  

    
    export default App;
 