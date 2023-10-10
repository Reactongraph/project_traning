import React from "react";
import './template5.css'
 import picture from '../images/temp5.webp'
 const Template5=()=>{
    return(
        <div className="bdy5">
            <div className="background-img5">
                <img src={picture} alt="img not found"/>
            </div>
            <div className="heading5">
            <span>Thank You</span>
            </div>
        </div>
    )
 }

 export default Template5