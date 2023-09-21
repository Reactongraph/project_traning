import React from "react";
import "./template2.css"
import flower from '../images/flower.jpeg' 
const Template2=()=>{
    return(
        <div className="bdy1">
            <div className="img1">
                <img src={flower}/>

            </div>
            {/* <div className="contant-div"> */}
            <p>Please join us in the celebration of our wedding</p>
            <h1>Harper Russo & Margarita Perez</h1>
            <h5 className="h5">Save the date</h5>
            <h6>Sun,22 june 2024</h6>
            <h5 className="h5">At 2 Am</h5>
            {/* </div> */}
            <div className="img2">
                <img src={flower}/>
            </div>
        </div>
    )
}

export default Template2