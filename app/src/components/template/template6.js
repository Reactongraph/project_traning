import react from 'react'
import './template6.css'
import corner_img from '../images/temp6.webp'
import { useState } from 'react'
const Template6=({edit})=>{
  const[message,setMessage]=useState("Happy Birthday to you")
  const handleChange=(e)=>{
       setMessage(e.target.value)
  }
    return(
      <div className='bdy6'>
       <div className='corner-img img-left'>
         <img src={corner_img} alt="image not found"/>
       </div>
       <div className='corner-img img-right'>
         <img src={corner_img}  alt="image not found"/>
       </div>
       <div className='corner-img img-bottom-left'>
         <img src={corner_img} alt="image not found"/>
       </div>
       <div className='corner-img img-bottom-right'>
          <img src={corner_img} alt="image not found"/>
       </div>
      <div className='span-div'> <span className='span'>{edit ?
                <input type="text" name="message" value={message} onChange={handleChange} /> : message}</span></div>
      </div>
    )
}

export default Template6