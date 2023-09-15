import React, { useState } from "react";
import './navigation.css'
import logimg from '../images/logo.webp'

function Navbar(){
    const[info,setInfo]=useState(false) 
       
 return(
     <div className="div">
        <img src={logimg} alt="image not found"/>    
    <nav className="nav">
              
        <ul className="ul">
            <li><button>Home</button></li>
            <li><button>Services</button></li>
            <li><button>About</button></li>
            <li><button>Contact</button></li>
        </ul>
        <button className="logoutbutton">Log Out</button>
        <button className="infobutton" onClick={()=>setInfo(!info)}>A</button>
    </nav>
   {info && <div className="showinfo">
     <h3>Aakash Verma</h3>
     <p>aakashvermartk@gmail.com</p>
      <div>Settings</div>
      <div>Terms & Conditions</div>
      <div>Refer friend</div>
      <div>Help</div>
   </div>}
    </div>
     
    
 )
}

export default Navbar 