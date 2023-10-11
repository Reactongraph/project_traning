import React from "react";
import './template7.css'
import img1 from '../images/temp7.1.webp'
import img2 from '../images/temp7.2.webp'
import { useState } from "react";
const Template7=({edit})=>{
    const[content,setContent]=useState({
        Message1:"Thank you",
        Message2:"For Your Purchase"
    })
    const handleChange=(e)=>{
      const{name,value}=e.target
      setContent({...content,[name]:value})
    }
   return(
    <div className="bdy7">
        <div className="img1">
            <img src={img1} alt="image not found"/>
        </div>
        <div className="img2">
            <img src={img1} alt="image not found"/>
        </div>
        <div className="img3">
            <img src={img2} alt="image not found"/>
        </div>
        <div className="img4">
            <img src={img2} alt="image not found"/>
        </div>
        <h1 className="head">{edit ?
                <input type="text" name="Message1" value={content.Message1} onChange={handleChange} /> : content.Message1}</h1>
        <span className="sub-head" >{edit ?
                <input type="text" name="Message2" value={content.Message2} onChange={handleChange} /> : content.Message2}</span>

    </div>
   )
}

export default Template7