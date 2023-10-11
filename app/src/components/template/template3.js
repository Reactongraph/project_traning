import react from 'react'
import  './template3.css'
import { useState } from 'react'
 const Template3=({edit})=>{
  const[content,setContent]=useState({
    name:"Aakash Verma",
    subName:"OLiva 5th birthday",
    dateTime:"20-August-2009 . 9:00pm",
    Address:"269/18 Arya nagar,Rohtak"
  })
  const handleChange=(e)=>{
    const {name,value}=e.target
    setContent({...content,[name]:value})
  }
   return(
    <div className='bdy2'>
        <h1>{edit?
               <input type="text" name="name" value={content.name} onChange={handleChange}/>:content.name}</h1>
        <div className='sub-div2'>
        <span>celebrating </span>
        <span>{edit?
               <input type="text" name="subName" value={content.subName} onChange={handleChange}/>:content.subName}</span>
        </div>
        <div className='sub-div2-1'>
        <p>{edit?
               <input type="text" name="dateTime" value={content.dateTime} onChange={handleChange}/>:content.dateTime}</p>
        <p>{edit?
               <input type="text" name="Address" value={content.Address} onChange={handleChange}/>:content.Address}</p>
        </div>
    </div>
   )
 }

export default  Template3