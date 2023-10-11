import React from "react";
import './template8.css'
import img from '../images/temp8.webp'
import { useState } from "react";
const Template8=({edit})=>{
   const[content,setContent]=useState({
      Message1:"Thank you",
      Message2:"For you order"
   })
   const handleChange=(e)=>{
       const {name,value}=e.target
       setContent({...content,[name]:value})
   }
   return(
    <div className="bdy8">
      <div className="img8">
         <img src={img} alt="image not found"/>
      </div>
      <div className="content">
      <span className="heading-content">{edit ?
                <input  type="text" name="Message1" value={content.Message1} onChange={handleChange} /> : content.Message1}</span>
      <p className="sub-heading8">{edit ?
                <input type="text" name="Message2" value={content.Message2} onChange={handleChange} /> : content.Message2}</p>
      </div>
    </div>
   )
}
export default Template8