import React from "react";
import './template5.css'
 import picture from '../images/temp5.webp'
 import { useState } from "react";
 const Template5=({edit})=>{
    const[message,setMessage]=useState("Thank You")
    const handleChange=(e)=>{
         setMessage(e.target.value)
    }
    return(
        <div className="bdy5">
            <div className="background-img5">
                <img src={picture} alt="img not found"/>
            </div>
            <div className="heading5">
            <span>{edit ?
                <input type="text" name="message" value={message} onChange={handleChange} /> : message}</span>
            </div>
        </div>
    )
 }

 export default Template5