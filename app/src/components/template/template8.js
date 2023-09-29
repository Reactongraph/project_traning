import React from "react";
import './template8.css'
import img from '../images/temp8.webp'
const Template8=()=>{
   return(
    <div className="bdy8">
      <div className="img">
         <img src={img} alt="image not found"/>
      </div>
      <div className="content">
      <span className="heading">Thank you</span>
      <p className="sub-heading">For you order</p>
      </div>
    </div>
   )
}
export default Template8