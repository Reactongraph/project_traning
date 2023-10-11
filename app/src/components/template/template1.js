import React from "react"
import './template1.css'
import { useState } from "react"
const Template1=({edit})=>{
    const[content,setContent]=useState({
        name:"Aakash Verma",
        date:"26.08.2023",
        time:" 2 AM"
    })
    
     const handleChange=(e)=>{
        const {name,value}=e.target
        setContent({...content,[name]:value})
     }

    return(
        
        <div className="bdy">
            <p className="paragraph">Plz join us in celebration of my birthday </p>
            <h1>{edit?
            <input type="text" name="name" value={content.name} onChange={handleChange}/>
            :content.name}</h1>
            <h3>Save the Date</h3>
            <span>{edit?
               <input type="text" name="date" value={content.date} onChange={handleChange} />
                 :content.date}</span>
            <p className="paragraph">At{edit?
              <input type="text" name="time" value={content.time} onChange={handleChange}/>:content.time}</p>
            <h6>Thankyou</h6>
        </div>
    )
}

export default Template1;