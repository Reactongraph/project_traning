import React from "react";
import './template4.css'
import { useState } from "react";
const Template4=({edit})=>{
    const[content,setContent]=useState({
        Message1:"Overcome all obstacles with",
        Message2:"Vignaharta's blessings"

    })
    const handleChange=(e)=>{
        const {name,value}=e.target
        setContent({...content,[name]:value})
    }
    return(
        <div className="bdy3">
            <div className="sub-div1">
                <h1>Happy Ganesh Chaturthi</h1>
                <div className="sub-div2">
                    <span>{edit ?
                <input type="text" name="Message1" value={content.Message1} onChange={handleChange} /> : content.Message1} </span>
                    <span>{edit ?
                <input type="text" name="Message2" value={content.Message2} onChange={handleChange} /> : content.Message2}</span>
                </div>

            </div>

        </div>
    )
}

export default Template4