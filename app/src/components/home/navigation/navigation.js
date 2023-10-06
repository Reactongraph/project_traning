import React, { useEffect, useRef, useState } from "react";
import './navigation.css'
import logimg from '../../images/logo.webp'
import { FiSettings } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { AiOutlineGift } from 'react-icons/ai';
import { AiOutlineRight } from 'react-icons/ai';

function Navbar() {
    const [info, setInfo] = useState(false)
    const popupref=useRef(null)
    useEffect(()=>{
        function handleClickOutside(event) {
           
            if (
              popupref.current &&
              !popupref.current.contains(event.target) 
              
            ) {
                setInfo(false)
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        
    },[popupref,info])
   
    return (

        <div className="main">
            
            <nav className="nav">
            <img src={logimg} height="30px" widht="30px" alt="image not found" />
                <ul className="ul">
                    <li><button>Home</button></li>
                    <li><button>Services</button></li>
                    <li><button>About</button></li>
                    <li><button>Contact</button></li>
                </ul>
                <button className="logoutbutton">Log Out</button>
                <button  ref={popupref} className="infobutton" onClick={() => setInfo(true)}>A</button>
            </nav>
            {info && <div className="showinfo" ref={popupref} >
                <h3 className="infoheader"> Aakash Verma</h3>
                <p className="loginfo">aakashvermartk@gmail.com</p>
                <div className="showinfobuttons"><FiSettings /><span>Settings</span><AiOutlineRight className="arrows" /></div>
                <div className="showinfobuttons"><AiOutlineGift /><span>Terms & Conditions</span><AiOutlineRight className="arrows" /></div>
                <div className="showinfobuttons"><AiOutlineMail /><span>Refer friend</span><AiOutlineRight className="arrows" /></div>
                <div className="showinfobuttons"><BiHelpCircle /><span>Help</span><AiOutlineRight className="arrows" /></div>
            </div>}
        </div>


    )
}

export default Navbar 