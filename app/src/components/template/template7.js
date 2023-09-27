import React from "react";
import './template7.css'
import img1 from '../images/temp7.1.webp'
import img2 from '../images/temp7.2.webp'
const Template7=()=>{
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
        <h1 className="head">Thank you</h1>
        <span className="sub-head" >For Your Purchase</span>

    </div>
   )
}

export default Template7